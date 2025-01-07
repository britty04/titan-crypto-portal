import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-mikasa-black to-mikasa-red">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-20 bg-cover bg-center" />
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            Mikasa AI
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            The most advanced AI trading companion, inspired by the strength and
            precision of humanity's strongest soldier.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="bg-mikasa-red hover:bg-red-800 text-white"
            >
              Start Trading
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/10"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};