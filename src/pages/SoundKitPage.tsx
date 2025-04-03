import React from 'react';
import SoundKit from '../components/SoundKit';
import { createFranchise3SoundKitTree } from '../lib/archiveUtils';

const SoundKitPage: React.FC = () => {
  const archiveTree = createFranchise3SoundKitTree();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">FRANCHISE3 SOUNDKIT</h1>
      <div className="bg-gray-50 p-4 rounded-lg mb-4">
        <p className="text-gray-600">
          Выберите папку для просмотра содержимого и воспроизведения звуковых файлов.
        </p>
      </div>
      <SoundKit archive={archiveTree} />
    </div>
  );
};

export default SoundKitPage; 