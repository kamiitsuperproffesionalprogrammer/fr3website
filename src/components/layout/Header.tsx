
import React from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between h-[80px] bg-white/90 backdrop-blur-md px-6 py-4 sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/789c4131c66039d52e6de595047654b3b96be227"
        className="w-[180px] h-auto"
        alt="Logo"
      />
      
      <nav className="hidden md:flex gap-8 items-center">
        {["about", "members", "soundkit", "album", "merch", "gallery"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="text-gray-800 font-medium text-base uppercase hover:text-gray-600 transition-colors"
          >
            {item}
          </a>
        ))}
      </nav>

      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent className="pt-10">
          <nav className="flex flex-col gap-6 mt-8">
            {["about", "members", "soundkit", "album", "merch", "gallery"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-gray-800 font-medium text-lg uppercase hover:text-gray-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};
