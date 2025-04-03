import React from "react";
import { Button } from "@/components/ui/button";
import { Menu, Globe } from "lucide-react";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";

export const Header: React.FC = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Русский' }
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 flex items-center justify-between h-[80px] bg-black/90 backdrop-blur-xl px-4 py-4 z-50 border-b border-white/20"
    >
      <motion.img
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/789c4131c66039d52e6de595047654b3b96be227"
        className="w-[180px] h-auto brightness-200 contrast-200 invert"
        alt="Logo"
      />
      
      <nav className="hidden md:flex gap-6 items-center">
        {["about", "members", "soundkit", "album", "merch", "gallery"].map((item, index) => (
          <motion.a
            key={item}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            href={`#${item}`}
            className="text-white/80 font-medium text-sm uppercase tracking-wider hover:text-white transition-colors relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white/60 transition-all duration-300 group-hover:w-full" />
          </motion.a>
        ))}
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white/80 hover:text-white">
              <Globe className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-black/95 backdrop-blur-xl border border-white/20">
            {languages.map((lang) => (
              <DropdownMenuItem
                key={lang.code}
                onClick={() => i18n.changeLanguage(lang.code)}
                className="text-white/80 hover:text-white hover:bg-white/10 cursor-pointer"
              >
                {lang.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>

      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button variant="ghost" size="icon" className="rounded-lg text-white/80 hover:text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </motion.div>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] bg-black/95 backdrop-blur-xl border-l border-white/20">
          <nav className="flex flex-col gap-6 mt-8">
            {["about", "members", "soundkit", "album", "merch", "gallery"].map((item, index) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                href={`#${item}`}
                className="text-white/80 font-medium text-lg uppercase tracking-wider hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white/60 transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </motion.header>
  );
};
