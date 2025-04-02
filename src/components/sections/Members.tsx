import React from "react";

export const Members: React.FC = () => {
  return (
    <section
      id="members"
      className="flex flex-col items-center gap-5 bg-[#636363] px-[50px] py-[69px]"
    >
      <h2 className="text-white text-[32px] font-bold">MEMBERS</h2>
      <div className="flex gap-5 justify-center max-md:flex-wrap max-sm:flex-col">
        <div className="w-[287px] h-[400px] bg-[#D9D9D9] max-md:w-[calc(33%_-_14px)] max-sm:w-full" />
        <div className="w-[287px] h-[400px] bg-[#D9D9D9] max-md:w-[calc(33%_-_14px)] max-sm:w-full" />
        <div className="w-[287px] h-[400px] bg-[#D9D9D9] max-md:w-[calc(33%_-_14px)] max-sm:w-full" />
        <div className="w-[287px] h-[400px] bg-[#D9D9D9] max-md:w-[calc(33%_-_14px)] max-sm:w-full" />
        <div className="w-[287px] h-[400px] bg-[#D9D9D9] max-md:w-[calc(33%_-_14px)] max-sm:w-full" />
      </div>
      <a
        href="#all-members"
        className="text-[#D9D9D9] text-[32px] self-end hover:text-white transition-colors"
      >
        all members..
      </a>
    </section>
  );
};
