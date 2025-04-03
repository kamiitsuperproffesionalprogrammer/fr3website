import React, { useState, useRef } from "react";
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  ChevronRight,
  ChevronDown,
  Folder,
  File,
  Play,
  Pause,
  Loader2,
  Music
} from "lucide-react";
import { motion } from "framer-motion";
import { createFranchise3SoundKitTree, FileNode } from '@/lib/archiveUtils';

const API_BASE_URL = '/api/soundkit';

export const SoundKit: React.FC = () => {
  const [archiveTree, setArchiveTree] = useState(createFranchise3SoundKitTree());
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set());
  const [currentAudioPath, setCurrentAudioPath] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loadingFolders, setLoadingFolders] = useState<Set<string>>(new Set());
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const updateTree = (nodes: FileNode[], targetPath: string, newChildren: FileNode[]): FileNode[] => {
    return nodes.map(node => {
      if (node.path === targetPath) {
        return { ...node, children: newChildren };
      }
      if (node.children) {
        return { ...node, children: updateTree(node.children, targetPath, newChildren) };
      }
      return node;
    });
  };

  const toggleFolder = async (path: string) => {
    console.log('Toggling folder:', path);
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(path)) {
      newExpanded.delete(path);
      console.log('Collapsing folder');
    } else {
      newExpanded.add(path);
      setLoadingFolders(prev => new Set(prev).add(path));
      
      try {
        const encodedPath = encodeURIComponent(path);
        const url = `${API_BASE_URL}?type=folder&path=${encodedPath}`;
        console.log('Fetching folder contents from:', url);
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          },
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          console.error('Server error:', errorData);
          throw new Error('Failed to load folder contents');
        }
        
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Invalid response format');
        }
        
        const contents = await response.json();
        console.log('Received contents:', contents);
        setArchiveTree(prev => updateTree(prev, path, contents));
      } catch (error) {
        console.error('Error loading folder contents:', error);
      } finally {
        setLoadingFolders(prev => {
          const newSet = new Set(prev);
          newSet.delete(path);
          return newSet;
        });
      }
    }
    setExpandedFolders(newExpanded);
  };

  const handlePlayAudio = async (path: string) => {
    if (currentAudioPath === path) {
      if (isPlaying) {
        audioRef.current?.pause();
      } else {
        audioRef.current?.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      try {
        const encodedPath = encodeURIComponent(path);
        const url = `${API_BASE_URL}?type=audio&path=${encodedPath}`;
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Accept': 'audio/mpeg',
          },
        });
        
        if (!response.ok) {
          throw new Error('Failed to load audio file');
        }
        
        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);
        setCurrentAudioPath(path);
        setIsPlaying(true);
      } catch (error) {
        console.error('Error loading audio file:', error);
      }
    }
  };

  const renderTree = (nodes: FileNode[], level: number = 0) => {
    return nodes.map((node) => (
      <div key={node.path} style={{ marginLeft: `${level * 20}px` }}>
        <button
          onClick={() => node.type === 'directory' ? toggleFolder(node.path) : handlePlayAudio(node.path)}
          className={`flex items-center w-full px-4 py-3 text-sm rounded-xl transition-all duration-300 ${
            currentAudioPath === node.path 
              ? 'bg-black/10 text-black font-medium' 
              : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          {node.type === 'directory' ? (
            <>
              {loadingFolders.has(node.path) ? (
                <Loader2 className="mr-3 h-5 w-5 animate-spin" />
              ) : expandedFolders.has(node.path) ? (
                <ChevronDown className="mr-3 h-5 w-5" />
              ) : (
                <ChevronRight className="mr-3 h-5 w-5" />
              )}
              <Folder className="mr-3 h-5 w-5 text-yellow-500" />
            </>
          ) : (
            <>
              <div className="mr-3 h-5 w-5" />
              <File className="mr-3 h-5 w-5 text-blue-500" />
            </>
          )}
          <span>{node.name}</span>
          {node.type === 'file' && node.name.match(/\.(mp3|wav|ogg)$/i) && (
            <div className="ml-auto">
              {currentAudioPath === node.path && isPlaying ? (
                <Pause className="h-5 w-5" />
              ) : (
                <Play className="h-5 w-5" />
              )}
            </div>
          )}
        </button>
        {node.type === 'directory' &&
          expandedFolders.has(node.path) &&
          node.children &&
          renderTree(node.children, level + 1)}
      </div>
    ));
  };

  return (
    <section id="soundkit" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-black">
            FRANCHISE3 SOUNDKIT
          </h2>
          <div className="w-20 h-1 bg-black mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="w-full md:w-[600px] mx-auto overflow-hidden border-none shadow-xl rounded-3xl bg-white/80 backdrop-blur-xl">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                {/* Sidebar */}
                <ScrollArea className="h-[500px] w-full md:w-64 border-r border-gray-100">
                  <div className="p-4">
                    {renderTree(archiveTree)}
                  </div>
                </ScrollArea>

                {/* Main Content Area */}
                <div className="flex-1 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-gray-800">Sound Preview</h3>
                    {currentAudioPath && (
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="p-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                      </button>
                    )}
                  </div>
                  <div className="h-[300px] rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                    <Music className="h-16 w-16 text-purple-600" />
                  </div>
                  {currentAudioPath && (
                    <audio
                      ref={audioRef}
                      src={`${API_BASE_URL}?type=audio&path=${encodeURIComponent(currentAudioPath)}`}
                      controls
                      className="mt-4 w-full"
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      onEnded={() => setIsPlaying(false)}
                    />
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};