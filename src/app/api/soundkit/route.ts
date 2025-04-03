import { NextResponse } from 'next/server';
import { getFolderContents, getAudioFile } from '@/api/soundkit';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get('path');
  const type = searchParams.get('type');

  if (!path) {
    return NextResponse.json({ error: 'Path is required' }, { status: 400 });
  }

  try {
    if (type === 'folder') {
      console.log('Requested folder path:', path);
      const contents = await getFolderContents(path);
      console.log('Folder contents:', contents);
      return NextResponse.json(contents);
    } else if (type === 'audio') {
      console.log('Requested audio path:', path);
      const audioData = await getAudioFile(path);
      if (!audioData) {
        return NextResponse.json(
          { error: 'Audio file not found' },
          { status: 404 }
        );
      }
      return new NextResponse(audioData, {
        headers: {
          'Content-Type': 'audio/mpeg',
        },
      });
    } else {
      return NextResponse.json(
        { error: 'Invalid type parameter' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error in API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 