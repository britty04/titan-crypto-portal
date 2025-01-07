import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

const ParticleField = () => {
  const count = 2000;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const theta = THREE.MathUtils.randFloatSpread(360);
    const phi = THREE.MathUtils.randFloatSpread(360);
    const radius = Math.random() * 10;

    positions[i * 3] = radius * Math.sin(theta) * Math.cos(phi);
    positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
    positions[i * 3 + 2] = radius * Math.cos(theta);

    colors[i * 3] = Math.random() * 0.5 + 0.5;
    colors[i * 3 + 1] = Math.random() * 0.2;
    colors[i * 3 + 2] = Math.random() * 0.2;
  }

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Stars 
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <ParticleField />
    </>
  );
};

export const Scene3D = () => {
  return (
    <div className="h-screen w-full absolute top-0 left-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 60 }}
        gl={{ 
          antialias: true,
          alpha: true,
        }}
      >
        <color attach="background" args={['#000']} />
        <Scene />
      </Canvas>
    </div>
  );
};