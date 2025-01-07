import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const ParticleField = () => {
  const points = useRef<THREE.Points>(null!);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y += 0.001;
    }
  });

  const count = 1000;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const theta = THREE.MathUtils.randFloatSpread(360);
    const phi = THREE.MathUtils.randFloatSpread(360);

    positions[i * 3] = 10 * Math.sin(theta) * Math.cos(phi);
    positions[i * 3 + 1] = 10 * Math.sin(theta) * Math.sin(phi);
    positions[i * 3 + 2] = 10 * Math.cos(theta);
  }

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#8B0000"
        sizeAttenuation={true}
        transparent={true}
        opacity={0.8}
      />
    </points>
  );
};

export const Scene3D = () => {
  return (
    <div className="h-screen w-full absolute top-0 left-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 20] }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <ParticleField />
          <OrbitControls 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={0.5}
            enableDamping={true}
            dampingFactor={0.05}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};