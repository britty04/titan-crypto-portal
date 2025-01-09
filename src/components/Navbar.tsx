import { Github, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-white">Mikasa<span className="text-mikasa-red">AI</span></span>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="text-white hover:text-mikasa-red hover:bg-transparent"
            onClick={() => window.open("https://github.com", "_blank")}
          >
            <Github className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            className="text-white hover:text-mikasa-red hover:bg-transparent"
            onClick={() => window.open("https://twitter.com", "_blank")}
          >
            <Twitter className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};