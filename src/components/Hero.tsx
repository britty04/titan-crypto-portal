import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Scene3D } from "./Scene3D";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Scene3D />
      <div className="absolute inset-0">
        <img
          src="https://i.imgur.com/A2cTFis.jpg"
          alt="Mikasa Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-mikasa-black via-mikasa-black/90 to-mikasa-red/20" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              Mikasa AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              The most advanced AI trading companion, inspired by the strength and
              precision of humanity's strongest soldier.
            </p>
            <div className="flex gap-4">
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

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://c4.wallpaperflare.com/wallpaper/770/711/692/anime-attack-on-titan-attack-on-titan-mikasa-ackerman-wallpaper-thumb.jpg"
              alt="Mikasa"
              className="rounded-lg shadow-2xl border-2 border-mikasa-red/50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mikasa-black to-transparent rounded-lg" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};