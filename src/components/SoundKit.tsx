import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Folder, File, Play, Pause, Loader2 } from 'lucide-react';
import { FileNode, isAudioFile } from '../lib/archiveUtils';

interface SoundKitProps {
  archive: FileNode[];
}

const SoundKit: React.FC<SoundKitProps> = ({ archive }) => {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set());
  const [currentAudio, setCurrentAudio] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loadingFolders, setLoadingFolders] = useState<Set<string>>(new Set());

  const toggleFolder = async (path: string) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(path)) {
      newExpanded.delete(path);
    } else {
      newExpanded.add(path);
      setLoadingFolders(prev => new Set(prev).add(path));
      
      try {
        // Здесь будет запрос к API для получения содержимого папки
        // Пока используем заглушку
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // В реальном приложении здесь будет загрузка реальных файлов
        const mockFiles = [
          `${path}/file1.wav`,
          `${path}/file2.mp3`,
          `${path}/subfolder/file3.wav`
        ];
        
        // Обновляем дерево с новыми файлами
        // TODO: Реализовать обновление дерева с реальными файлами
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

  const handlePlayAudio = (path: string) => {
    if (currentAudio === path) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentAudio(path);
      setIsPlaying(true);
    }
  };

  const renderTree = (nodes: FileNode[], level: number = 0) => {
    return nodes.map((node) => (
      <div key={node.path} style={{ marginLeft: `${level * 20}px` }}>
        <div className="flex items-center gap-2 py-1 hover:bg-gray-100 cursor-pointer">
          {node.type === 'directory' ? (
            <>
              {loadingFolders.has(node.path) ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : expandedFolders.has(node.path) ? (
                <ChevronDown
                  className="w-4 h-4"
                  onClick={() => toggleFolder(node.path)}
                />
              ) : (
                <ChevronRight
                  className="w-4 h-4"
                  onClick={() => toggleFolder(node.path)}
                />
              )}
              <Folder className="w-4 h-4 text-yellow-500" />
            </>
          ) : (
            <>
              <div className="w-4 h-4" />
              <File className="w-4 h-4 text-blue-500" />
            </>
          )}
          <span className="text-sm">{node.name}</span>
          {node.type === 'file' && isAudioFile(node.name) && (
            <button
              onClick={() => handlePlayAudio(node.path)}
              className="ml-auto p-1 hover:bg-gray-200 rounded-full"
            >
              {currentAudio === node.path && isPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
            </button>
          )}
        </div>
        {node.type === 'directory' &&
          expandedFolders.has(node.path) &&
          node.children &&
          renderTree(node.children, level + 1)}
      </div>
    ));
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Sound Kit</h2>
      <div className="border rounded-lg p-4">
        {renderTree(archive)}
      </div>
      {currentAudio && (
        <audio
          src={currentAudio}
          controls
          className="mt-4 w-full"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        />
      )}
    </div>
  );
};

export default SoundKit; 