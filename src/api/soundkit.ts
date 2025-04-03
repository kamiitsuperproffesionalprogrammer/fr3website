import fs from 'fs';
import path from 'path';

export interface FileNode {
  name: string;
  type: 'file' | 'directory';
  children?: FileNode[];
  path: string;
}

const isAudioFile = (filename: string): boolean => {
  const audioExtensions = ['.mp3', '.wav', '.ogg', '.m4a', '.aac'];
  return audioExtensions.some(ext => filename.toLowerCase().endsWith(ext));
};

const createFileTree = (files: string[]): FileNode[] => {
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

export const getFolderContents = async (folderPath: string): Promise<FileNode[]> => {
  try {
    const basePath = path.join(process.cwd(), 'FRANCHISE3 SOUNDKIT');
    const fullPath = path.join(basePath, folderPath);
    
    console.log('Base path:', basePath);
    console.log('Full path:', fullPath);
    
    // Проверяем, существует ли папка
    if (!fs.existsSync(fullPath)) {
      console.error(`Folder not found: ${fullPath}`);
      return [];
    }

    // Получаем список файлов и папок
    const items = fs.readdirSync(fullPath);
    console.log('Items in folder:', items);
    
    const contents: string[] = [];

    // Обрабатываем каждый элемент
    items.forEach(item => {
      const itemPath = path.join(fullPath, item);
      const relativePath = path.join(folderPath, item).replace(/\\/g, '/');
      
      console.log('Processing item:', item);
      console.log('Item path:', itemPath);
      console.log('Relative path:', relativePath);
      
      if (fs.statSync(itemPath).isDirectory()) {
        // Если это папка, добавляем её
        contents.push(relativePath);
      } else if (isAudioFile(item)) {
        // Если это аудио файл, добавляем его
        contents.push(relativePath);
      }
    });

    console.log('Final contents:', contents);
    return createFileTree(contents);
  } catch (error) {
    console.error('Error loading folder contents:', error);
    return [];
  }
};

export const getAudioFile = async (filePath: string): Promise<Buffer | null> => {
  try {
    const basePath = path.join(process.cwd(), 'FRANCHISE3 SOUNDKIT');
    const fullPath = path.join(basePath, filePath);
    
    if (!fs.existsSync(fullPath) || !isAudioFile(filePath)) {
      return null;
    }

    return fs.readFileSync(fullPath);
  } catch (error) {
    console.error('Error loading audio file:', error);
    return null;
  }
}; 