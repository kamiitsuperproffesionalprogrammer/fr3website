import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between h-[97px] bg-[#636363] px-[18px] py-2 max-sm:h-auto max-sm:flex-col max-sm:gap-2.5 max-sm:p-2">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/789c4131c66039d52e6de595047654b3b96be227"
        className="w-[255px] h-[60px]"
        alt="Logo"
      />
      <nav className="flex gap-[41px] items-center max-sm:flex-wrap max-sm:justify-center">
        <a
          href="#about"
          className="text-white text-[32px] font-bold max-sm:text-2xl hover:opacity-80"
        >
          ABOUT US
        </a>
        <a
          href="#members"
          className="text-white text-[32px] font-bold max-sm:text-2xl hover:opacity-80"
        >
          MEMBERS
        </a>
        <a
          href="#soundkit"
          className="text-white text-[32px] font-bold max-sm:text-2xl hover:opacity-80"
        >
          SOUND KIT
        </a>
        <a
          href="#album"
          className="text-white text-[32px] font-bold max-sm:text-2xl hover:opacity-80"
        >
          ALBUM
        </a>
        <a
          href="#merch"
          className="text-white text-[32px] font-bold max-sm:text-2xl hover:opacity-80"
        >
          MERCH
        </a>
        <a
          href="#gallery"
          className="text-white text-[32px] font-bold max-sm:text-2xl hover:opacity-80"
        >
          GALLERY
        </a>
      </nav>
    </header>
  );
};
