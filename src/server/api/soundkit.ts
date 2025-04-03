import express from 'express';
import { getFolderContents, getAudioFile } from '../../api/soundkit';

const router = express.Router();

// Получить содержимое папки
router.get('/folder/:path(*)', async (req, res) => {
  try {
    console.log('Requested folder path:', req.params.path);
    const contents = await getFolderContents(req.params.path);
    console.log('Folder contents:', contents);
    res.json(contents);
  } catch (error) {
    console.error('Error in folder endpoint:', error);
    res.status(500).json({ error: 'Failed to load folder contents' });
  }
});

// Получить аудио файл
router.get('/audio/:path(*)', async (req, res) => {
  try {
    console.log('Requested audio path:', req.params.path);
    const audioData = await getAudioFile(req.params.path);
    if (!audioData) {
      return res.status(404).json({ error: 'Audio file not found' });
    }
    res.setHeader('Content-Type', 'audio/mpeg');
    res.send(audioData);
  } catch (error) {
    console.error('Error in audio endpoint:', error);
    res.status(500).json({ error: 'Failed to load audio file' });
  }
});

export default router; 