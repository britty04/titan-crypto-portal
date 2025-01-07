import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Bitcoin, Wallet, BookOpen, Twitter } from "lucide-react";
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
          <Bitcoin className="w-8 h-8 text-mikasa-red" />
          <span className="text-xl font-bold text-white">Mikasa AI</span>
        </div>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white hover:text-mikasa-red">
                Features
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px]">
                  <div className="flex items-center gap-2">
                    <Wallet className="w-5 h-5" />
                    <span>AI Trading</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    <span>Documentation</span>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-mikasa-red transition-colors"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <Button className="bg-mikasa-red hover:bg-red-800">
            Connect Wallet
          </Button>
        </div>
      </div>
    </motion.div>
  );
};