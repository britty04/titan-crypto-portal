import { Terminal } from "./Terminal";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-mikasa-red/20" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <Terminal />
      </div>
    </div>
  );
};