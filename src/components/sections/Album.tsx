import React, { useState } from "react";
import { MusicPlayer } from "@/components/ui/MusicPlayer";

export const Album: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="album" className="bg-[#636363] pt-[35px]">
      <div className="flex items-center justify-between px-[34px] py-0">
        <div className="flex gap-[5px] border border-slate-300 bg-white px-[5px] py-1 rounded-md border-solid">
          <button className="text-black text-sm px-3 py-1.5 hover:bg-gray-100 rounded">
            2
          </button>
          <button className="text-black text-sm px-3 py-1.5 hover:bg-gray-100 rounded">
            3
          </button>
        </div>
        <h2 className="text-white text-[32px] font-bold">ALBUM</h2>
      </div>
      <div className="w-[930px] h-[930px] relative bg-[#D9D9D9] mx-auto my-[63px] rounded-[50%]" />
      <MusicPlayer
        isPlaying={isPlaying}
        onPlayPause={() => setIsPlaying(!isPlaying)}
        onPrevious={() => console.log("Previous track")}
        onNext={() => console.log("Next track")}
      />
    </section>
  );
};
