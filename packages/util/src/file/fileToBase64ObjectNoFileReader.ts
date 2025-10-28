import {Base64Object} from './Base64Object';

export async function fileToBase64ObjectNoFileReader(file: File): Promise<Base64Object> {
  const arrayBuffer = await file.arrayBuffer();
  const base64Data = Buffer.from(arrayBuffer).toString('base64');

  return {
    data: base64Data,
    name: file.name,
    type: file.type,
  };
}
