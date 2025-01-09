import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Terminal } from "./Terminal";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-mikasa-red/20" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl font-bold text-white mb-4"
          >
            Mikasa<span className="text-mikasa-red">AI</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400"
          >
            Your gateway to the future of trading.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <Terminal />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex justify-center gap-4"
        >
          <Button
            size="lg"
            className="bg-mikasa-red hover:bg-red-800 text-white px-8 py-6 text-lg rounded-xl"
          >
            Get Started
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl"
          >
            View Documentation
          </Button>
        </motion.div>
      </div>
    </div>
  );
};