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
  { id: 1, title: "Dawn of a New Day", artist: "Alex Thompson", duration: "3:45", audioUrl: "/src/audio/5_NEWDAY.wav" },
  { id: 2, title: "Midnight Dreams", artist: "Sarah Chen", duration: "4:12", audioUrl: "/src/audio/5_NEWDAY.wav" },
  { id: 3, title: "Echoes in the Wind", artist: "Marcus Rodriguez", duration: "3:58", audioUrl: "/src/audio/5_NEWDAY.wav" },
  { id: 4, title: "Silent Whispers", artist: "Emma Watson", duration: "4:30", audioUrl: "/src/audio/5_NEWDAY.wav" },
  { id: 5, title: "Dancing Shadows", artist: "James Wilson", duration: "3:15", audioUrl: "/src/audio/5_NEWDAY.wav" },
  { id: 6, title: "Ocean Waves", artist: "Sophie Anderson", duration: "4:45", audioUrl: "/src/audio/5_NEWDAY.wav" },
  { id: 7, title: "Starlight", artist: "David Kim", duration: "3:20", audioUrl: "/src/audio/5_NEWDAY.wav" },
  { id: 8, title: "Mountain Air", artist: "Lisa Park", duration: "4:05", audioUrl: "/src/audio/5_NEWDAY.wav" },
  { id: 9, title: "Desert Wind", artist: "Michael Brown", duration: "3:55", audioUrl: "/src/audio/5_NEWDAY.wav" },
  { id: 10, title: "City Lights", artist: "Rachel Green", duration: "4:15", audioUrl: "/src/audio/5_NEWDAY.wav" },
  { id: 11, title: "Forest Path", artist: "Thomas Lee", duration: "3:40", audioUrl: "/src/audio/5_NEWDAY.wav" },
  { id: 12, title: "Northern Lights", artist: "Nina Patel", duration: "4:25", audioUrl: "/src/audio/5_NEWDAY.wav" },
  { id: 13, title: "Sunset Dreams", artist: "Chris Martinez", duration: "3:50", audioUrl: "/src/audio/5_NEWDAY.wav" },
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
      setIsPlaying(false);
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
      setIsPlaying(false);
      setCurrentTime(0);
    });

    return () => {
      audio.removeEventListener('loadedmetadata', () => {});
      audio.removeEventListener('timeupdate', () => {});
      audio.removeEventListener('ended', () => {});
      audio.pause();
      audio.currentTime = 0;
    };
  }, [currentTrack]);

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
      if (!isPlaying) {
        audioRef.current.pause();
      }
    }
  };

  const handleTrackChange = (track: Track) => {
    setCurrentTrack(track);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      setCurrentTime(0);
    }
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
            className="w-full lg:w-1/2"
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
                    onMouseDown={() => {
                      if (audioRef.current) {
                        audioRef.current.pause();
                        setIsPlaying(false);
                      }
                    }}
                    onMouseUp={() => {
                      if (audioRef.current && !isMuted) {
                        audioRef.current.play();
                        setIsPlaying(true);
                      }
                    }}
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
            className="w-full lg:w-1/2 bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl h-full"
          >
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="space-y-4">
                {tracks.slice(0, 7).map((track) => (
                  <div
                    key={track.id}
                    className={`flex items-center justify-between p-3 rounded-lg transition-colors cursor-pointer ${
                      currentTrack.id === track.id
                        ? "bg-black/5"
                        : "hover:bg-gray-50"
                    }`}
                    onClick={() => handleTrackChange(track)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-gray-500 w-6">{track.id.toString().padStart(2, '0')}</span>
                      <div>
                        <h4 className="font-medium text-gray-800 text-sm">{track.title}</h4>
                        <Link to={`/members/${track.artist.toLowerCase().replace(/\s+/g, '-')}`} className="text-xs text-gray-500 hover:text-black transition-colors">
                          {track.artist}
                        </Link>
                      </div>
                    </div>
                    <span className="text-gray-500 text-sm">{track.duration}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {tracks.slice(7).map((track) => (
                  <div
                    key={track.id}
                    className={`flex items-center justify-between p-3 rounded-lg transition-colors cursor-pointer ${
                      currentTrack.id === track.id
                        ? "bg-black/5"
                        : "hover:bg-gray-50"
                    }`}
                    onClick={() => handleTrackChange(track)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-gray-500 w-6">{track.id.toString().padStart(2, '0')}</span>
                      <div>
                        <h4 className="font-medium text-gray-800 text-sm">{track.title}</h4>
                        <Link to={`/members/${track.artist.toLowerCase().replace(/\s+/g, '-')}`} className="text-xs text-gray-500 hover:text-black transition-colors">
                          {track.artist}
                        </Link>
                      </div>
                    </div>
                    <span className="text-gray-500 text-sm">{track.duration}</span>
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
