import fs from 'fs';
import path from 'path';

export interface FileNode {
  name: string;
  type: 'file' | 'directory';
  children?: FileNode[];
  path: string;
}

export const createFileTree = (files: string[]): FileNode[] => {
  const root: FileNode[] = [];
  const pathMap = new Map<string, FileNode>();

  files.forEach((file) => {
    const parts = file.split('/');
    let currentPath = '';
    let parentNode: FileNode | undefined;

    parts.forEach((part, index) => {
      currentPath = currentPath ? `${currentPath}/${part}` : part;
      
      if (!pathMap.has(currentPath)) {
        const isDirectory = index < parts.length - 1;
        const node: FileNode = {
          name: part,
          type: isDirectory ? 'directory' : 'file',
          path: currentPath,
          children: isDirectory ? [] : undefined
        };

        if (isDirectory) {
          if (parentNode) {
            parentNode.children!.push(node);
          } else {
            root.push(node);
          }
        } else {
          if (parentNode) {
            parentNode.children!.push(node);
          } else {
            root.push(node);
          }
        }

        pathMap.set(currentPath, node);
      }

      parentNode = pathMap.get(currentPath);
    });
  });

  return root;
};

export const isAudioFile = (filename: string): boolean => {
  const audioExtensions = ['.mp3', '.wav', '.ogg', '.m4a', '.aac'];
  return audioExtensions.some(ext => filename.toLowerCase().endsWith(ext));
};

// Структура папок FRANCHISE3 SOUNDKIT
export const FRANCHISE3_SOUNDKIT_STRUCTURE = [
  'INFILTRATOR',
  'SERUM2',
  'HIVE',
  'FALCON',
  'DRUMS',
  'AUTOCHROMA'
];

// Создаем дерево из структуры папок
export const createFranchise3SoundKitTree = (): FileNode[] => {
  return FRANCHISE3_SOUNDKIT_STRUCTURE.map(folder => ({
    name: folder,
    type: 'directory',
    path: folder,
    children: []
  }));
};

// Функция для получения содержимого папки
export const getFolderContents = async (folderPath: string): Promise<FileNode[]> => {
  try {
    const basePath = path.join(process.cwd(), 'src', 'FRANCHISE3 SOUNDKIT');
    const fullPath = path.join(basePath, folderPath);
    
    // Проверяем, существует ли папка
    if (!fs.existsSync(fullPath)) {
      console.error(`Folder not found: ${fullPath}`);
      return [];
    }

    // Получаем список файлов и папок
    const items = fs.readdirSync(fullPath);
    const contents: string[] = [];

    // Обрабатываем каждый элемент
    items.forEach(item => {
      const itemPath = path.join(fullPath, item);
      const relativePath = path.join(folderPath, item);
      
      if (fs.statSync(itemPath).isDirectory()) {
        // Если это папка, добавляем её и рекурсивно получаем содержимое
        contents.push(relativePath);
        const subItems = fs.readdirSync(itemPath);
        subItems.forEach(subItem => {
          contents.push(path.join(relativePath, subItem));
        });
      } else if (isAudioFile(item)) {
        // Если это аудио файл, добавляем его
        contents.push(relativePath);
      }
    });

    return createFileTree(contents);
  } catch (error) {
    console.error('Error loading folder contents:', error);
    return [];
  }
}; 