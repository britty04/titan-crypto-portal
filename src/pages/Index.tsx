import { Terminal } from "@/components/Terminal";

const Index = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('/lovable-uploads/bc5f13f7-8d1d-47d5-a11f-e7f09d1c498d.png')`,
        backgroundColor: '#000000'
      }}
    >
      <div className="text-center mb-8">
        <h1 className="text-6xl font-bold text-white mb-4">MIKASA</h1>
        <p className="text-xl text-gray-300">Your gateway to the future of coding.</p>
      </div>
      <Terminal />
    </div>
  );
};

export default Index;