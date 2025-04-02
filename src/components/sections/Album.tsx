import React, { useState } from "react";
import { MusicPlayer } from "@/components/ui/MusicPlayer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion } from "framer-motion";
import { Music, Play, Pause, SkipBack, SkipForward } from "lucide-react";

export const Album: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="album" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-black">
            ALBUM
          </h2>
          <div className="w-20 h-1 bg-black mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center mb-12"
        >
          <Tabs defaultValue="2" className="w-full max-w-md">
            <TabsList className="w-full bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full p-1">
              <TabsTrigger value="2" className="flex-1 rounded-full data-[state=active]:bg-black data-[state=active]:text-white">2</TabsTrigger>
              <TabsTrigger value="3" className="flex-1 rounded-full data-[state=active]:bg-black data-[state=active]:text-white">3</TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16 max-w-2xl mx-auto"
        >
          <AspectRatio ratio={1/1} className="bg-gray-100 rounded-3xl overflow-hidden shadow-2xl">
            <div className="w-full h-full flex items-center justify-center relative group">
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Music className="h-24 w-24 text-black group-hover:scale-110 transition-transform duration-300" />
            </div>
          </AspectRatio>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-md mx-auto bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Track Name</h3>
              <p className="text-gray-500">Artist Name</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <SkipBack className="h-5 w-5 text-gray-600" />
              </button>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-3 rounded-full bg-black text-white hover:bg-black/80 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <SkipForward className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
          <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full w-1/3 bg-black rounded-full" />
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-500">
            <span>1:23</span>
            <span>3:45</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
