import {MimeType} from '@coolcolduk/enum';

export function isGDriveMimeTypeFolder(mimeType: string) {
  return mimeType === MimeType.GOOGLE_FOLDER;
}
