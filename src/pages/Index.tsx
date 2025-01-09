import { Terminal } from "@/components/Terminal";
import { Scene3D } from "@/components/Scene3D";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      <Scene3D />
      <div className="text-center mb-8 relative z-10">
        <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-mikasa-red animate-pulse">
          MikasaAI
        </h1>
        <p className="text-xl text-gray-300">Your gateway to the future of coding.</p>
      </div>
      <Terminal />
    </div>
  );
};

export default Index;