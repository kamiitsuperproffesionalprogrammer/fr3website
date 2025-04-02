
import React from "react";
import { Slider } from "@/components/ui/slider";
import { SkipBack, SkipForward, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MusicPlayerProps {
  currentTime?: string;
  duration?: string;
  isPlaying?: boolean;
  onPlayPause?: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({
  currentTime = "0:10",
  duration = "3:24",
  isPlaying = false,
  onPlayPause = () => {},
  onPrevious = () => {},
  onNext = () => {},
}) => {
  return (
    <div className="max-w-md w-full backdrop-blur-md bg-white/90 mx-auto rounded-2xl p-4 shadow-lg border border-gray-100">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-xl bg-gray-200 overflow-hidden">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/09688c87aab049f8650ec8bde15fe1a0314ea617"
              className="w-full h-full object-cover"
              alt="Album cover"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-gray-800 font-semibold">Baby Blue</div>
            <div className="text-gray-500 text-sm">Luke Hemmings</div>
          </div>
        </div>
        
        <div className="space-y-2">
          <Slider defaultValue={[25]} max={100} step={1} className="w-full" />
          <div className="flex justify-between text-xs text-gray-500">
            <span>{currentTime}</span>
            <span>-{duration}</span>
          </div>
        </div>
        
        <div className="flex justify-center items-center gap-6">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onPrevious}
            className="text-gray-800 hover:text-gray-600 hover:bg-gray-100 rounded-full"
          >
            <SkipBack className="h-6 w-6" />
          </Button>
          
          <Button 
            variant="secondary" 
            size="icon" 
            onClick={onPlayPause}
            className="h-14 w-14 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800"
          >
            {isPlaying ? (
              <Pause className="h-6 w-6" />
            ) : (
              <Play className="h-6 w-6 ml-1" />
            )}
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onNext}
            className="text-gray-800 hover:text-gray-600 hover:bg-gray-100 rounded-full"
          >
            <SkipForward className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};
