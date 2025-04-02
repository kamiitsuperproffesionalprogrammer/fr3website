
import React, { useState } from "react";
import { MusicPlayer } from "@/components/ui/MusicPlayer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const Album: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="album" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <Tabs defaultValue="2">
            <TabsList className="bg-gray-100">
              <TabsTrigger value="2">2</TabsTrigger>
              <TabsTrigger value="3">3</TabsTrigger>
            </TabsList>
          </Tabs>
          <h2 className="text-3xl font-bold text-gray-800">ALBUM</h2>
        </div>
        
        <div className="mb-16 max-w-2xl mx-auto">
          <AspectRatio ratio={1/1} className="bg-gray-100 rounded-full overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <span className="text-gray-400 text-xl">Album Cover</span>
            </div>
          </AspectRatio>
        </div>
        
        <div className="mt-10">
          <MusicPlayer
            isPlaying={isPlaying}
            onPlayPause={() => setIsPlaying(!isPlaying)}
            onPrevious={() => console.log("Previous track")}
            onNext={() => console.log("Next track")}
          />
        </div>
      </div>
    </section>
  );
};
