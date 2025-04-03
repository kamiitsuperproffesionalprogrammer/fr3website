import React, { useState, useRef, useEffect } from "react";
import { MusicPlayer } from "@/components/ui/MusicPlayer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion } from "framer-motion";
import { Music, Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react";
import { Link } from "react-router-dom";

interface Track {
  id: number;
  title: string;
  artist: string;
  duration: string;
  audioUrl: string;
}

const tracks: Track[] = [
  { id: 1, title: "hC INTRO", artist: "FRANCHISE2, yukibleeding", duration: "2:09", audioUrl: "/src/audio/1_hC_INTRO.wav" },
  { id: 2, title: "WORLD", artist: "FRANCHISE2, modestmorty", duration: "1:31", audioUrl: "/src/audio/2_WORLD.wav" },
  { id: 3, title: "CARTOON", artist: "FRANCHISE2, childchewer, komit", duration: "2:34", audioUrl: "/src/audio/3_CARTOON.wav" },
  { id: 4, title: "GULIVER", artist: "FRANCHISE2, modestmorty, childchewer", duration: "2:08", audioUrl: "/src/audio/4_GULIVER.wav" },
  { id: 5, title: "NEWDAY", artist: "FRANCHISE2, zmny, ayoluvme", duration: "2:03", audioUrl: "/src/audio/5_NEWDAY.wav" },
  { id: 6, title: "CUTOFF", artist: "FRANCHISE2, childchewer, zmny", duration: "2:04", audioUrl: "/src/audio/6_CUTOFF.wav" },
  { id: 7, title: "POWERBANK", artist: "FRANCHISE2, spadegocrazy, Mike Hokku", duration: "1:36", audioUrl: "/src/audio/7_POWERBANK.wav" },
  { id: 8, title: "SPEND", artist: "FRANCHISE2, zmny, nexmend", duration: "2:09", audioUrl: "/src/audio/8_SPEND.wav" },
  { id: 9, title: "СИМПТОМЫ", artist: "FRANCHISE2, modestmorty, kanbuu, 4, Mike Hokku", duration: "2:47", audioUrl: "/src/audio/9_СИМПТОМЫ.wav" },
  { id: 10, title: "SPORT", artist: "FRANCHISE2, AIICA, ayoluvme", duration: "2:29", audioUrl: "/src/audio/10_SPORT.wav" },
  { id: 11, title: "WANT", artist: "FRANCHISE2, zmny, childchewer, ayoluvme", duration: "2:58", audioUrl: "/src/audio/11_WANT.wav" },
  { id: 12, title: "МЕЖДУ", artist: "FRANCHISE2, spadegocrazy, childchewer", duration: "1:43", audioUrl: "/src/audio/12_МЕЖДУ.wav" },
  { id: 13, title: "MAINSTREAMLOVE", artist: "FRANCHISE2, ayoluvme, komit", duration: "1:51", audioUrl: "/src/audio/13_MAINSTREAMLOVE.wav" },
];

export const Album: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<Track>(tracks[0]);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setCurrentTime(0);
    }

    audioRef.current = new Audio(currentTrack.audioUrl);
    
    const audio = audioRef.current;
    
    audio.addEventListener('loadedmetadata', () => {
      setDuration(audio.duration);
    });

    audio.addEventListener('timeupdate', () => {
      setCurrentTime(audio.currentTime);
    });

    audio.addEventListener('ended', () => {
      const currentIndex = tracks.findIndex(track => track.id === currentTrack.id);
      if (currentIndex < tracks.length - 1) {
        setCurrentTrack(tracks[currentIndex + 1]);
        setIsPlaying(true);
      } else {
        setIsPlaying(false);
        setCurrentTime(0);
      }
    });

    if (isPlaying) {
      audio.play();
    }

    return () => {
      audio.removeEventListener('loadedmetadata', () => {});
      audio.removeEventListener('timeupdate', () => {});
      audio.removeEventListener('ended', () => {});
      audio.pause();
      audio.currentTime = 0;
    };
  }, [currentTrack, isPlaying]);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const handleTrackChange = (track: Track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

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

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full lg:w-[400px]"
          >
            <AspectRatio ratio={1/1} className="bg-gray-100 rounded-3xl overflow-hidden shadow-2xl mb-8">
              <div className="w-full h-full flex items-center justify-center relative group">
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Music className="h-24 w-24 text-black group-hover:scale-110 transition-transform duration-300" />
              </div>
            </AspectRatio>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{currentTrack.title}</h3>
                  <Link to={`/members/${currentTrack.artist.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-500 hover:text-black transition-colors">
                    {currentTrack.artist}
                  </Link>
                </div>
                <div className="flex items-center gap-4">
                  <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <SkipBack className="h-5 w-5 text-gray-600" />
                  </button>
                  <button
                    onClick={handlePlayPause}
                    className="p-3 rounded-full bg-black text-white hover:bg-black/80 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <SkipForward className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="h-1 bg-gray-100 rounded-full overflow-hidden relative">
                  <div 
                    className="absolute left-0 top-0 h-full bg-black rounded-full"
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                  />
                  <input
                    type="range"
                    min="0"
                    max={duration}
                    value={currentTime}
                    onChange={handleTimeChange}
                    className="absolute inset-0 w-full h-full cursor-pointer appearance-none bg-transparent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:z-10"
                  />
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleMute}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    {isMuted ? (
                      <VolumeX className="h-5 w-5 text-gray-600" />
                    ) : (
                      <Volume2 className="h-5 w-5 text-gray-600" />
                    )}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="flex-1 h-1 bg-gray-100 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:cursor-pointer"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full lg:w-[calc(100%-432px)] bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl"
          >
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="space-y-3">
                {tracks.slice(0, 7).map((track) => (
                  <div
                    key={track.id}
                    className={`flex items-center justify-between p-3 rounded-xl transition-all duration-300 cursor-pointer ${
                      currentTrack.id === track.id
                        ? "bg-black/5 shadow-md"
                        : "hover:bg-gray-50/80"
                    }`}
                    onClick={() => handleTrackChange(track)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-gray-400 font-medium w-6 text-sm">{track.id.toString().padStart(2, '0')}</span>
                      <div className="space-y-1">
                        <h4 className="font-medium text-gray-800 text-sm">{track.title}</h4>
                        <Link to={`/members/${track.artist.toLowerCase().replace(/\s+/g, '-')}`} className="text-xs text-gray-500 hover:text-black transition-colors block">
                          {track.artist}
                        </Link>
                      </div>
                    </div>
                    <span className="text-gray-400 text-xs font-medium">{track.duration}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {tracks.slice(7).map((track) => (
                  <div
                    key={track.id}
                    className={`flex items-center justify-between p-3 rounded-xl transition-all duration-300 cursor-pointer ${
                      currentTrack.id === track.id
                        ? "bg-black/5 shadow-md"
                        : "hover:bg-gray-50/80"
                    }`}
                    onClick={() => handleTrackChange(track)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-gray-400 font-medium w-6 text-sm">{track.id.toString().padStart(2, '0')}</span>
                      <div className="space-y-1">
                        <h4 className="font-medium text-gray-800 text-sm">{track.title}</h4>
                        <Link to={`/members/${track.artist.toLowerCase().replace(/\s+/g, '-')}`} className="text-xs text-gray-500 hover:text-black transition-colors block">
                          {track.artist}
                        </Link>
                      </div>
                    </div>
                    <span className="text-gray-400 text-xs font-medium">{track.duration}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
