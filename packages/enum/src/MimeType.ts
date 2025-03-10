export enum MimeType {
  // Text
  TEXT_PLAIN = 'text/plain',
  TEXT_HTML = 'text/html',
  TEXT_CSS = 'text/css',
  TEXT_JAVASCRIPT = 'text/javascript',
  TEXT_CSV = 'text/csv',
  TEXT_XML = 'text/xml',

  // Images
  IMAGE_JPEG = 'image/jpeg',
  IMAGE_PNG = 'image/png',
  IMAGE_GIF = 'image/gif',
  IMAGE_BMP = 'image/bmp',
  IMAGE_WEBP = 'image/webp',
  IMAGE_TIFF = 'image/tiff',
  IMAGE_SVG = 'image/svg+xml',

  // Audio
  AUDIO_MPEG = 'audio/mpeg', // MP3
  AUDIO_WAV = 'audio/wav',
  AUDIO_OGG = 'audio/ogg',
  AUDIO_AAC = 'audio/aac',
  AUDIO_FLAC = 'audio/flac',

  // Video
  VIDEO_MP4 = 'video/mp4',
  VIDEO_MPEG = 'video/mpeg',
  VIDEO_WEBM = 'video/webm',
  VIDEO_OGG = 'video/ogg',
  VIDEO_AVI = 'video/x-msvideo',
  VIDEO_WMV = 'video/x-ms-wmv',
  VIDEO_QUICKTIME = 'video/quicktime',

  // Application
  APPLICATION_JSON = 'application/json',
  APPLICATION_XML = 'application/xml',
  APPLICATION_PDF = 'application/pdf',
  APPLICATION_ZIP = 'application/zip',
  APPLICATION_GZIP = 'application/gzip',
  APPLICATION_OCTET_STREAM = 'application/octet-stream', // Generic binary
  APPLICATION_MSWORD = 'application/msword', // .doc
  APPLICATION_VND_MS_EXCEL = 'application/vnd.ms-excel', // .xls
  APPLICATION_VND_MS_POWERPOINT = 'application/vnd.ms-powerpoint', // .ppt
  APPLICATION_VND_OPENXML_WORD = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
  APPLICATION_VND_OPENXML_EXCEL = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // .xlsx
  APPLICATION_VND_OPENXML_POWERPOINT = 'application/vnd.openxmlformats-officedocument.presentationml.presentation', // .pptx
  APPLICATION_POSTSCRIPT = 'application/postscript',
  APPLICATION_RTF = 'application/rtf',
  APPLICATION_SLA = 'application/sla',

  // ebook
  APPLICATION_MOBIPOCKET_EBOOK = 'application/x-mobipocket-ebook',
  APPLICATION_EPUB_EBOOK = 'application/epub+zip',
  APPLICATION_IBOOKS_EBOOK = 'application/x-ibooks+zip',

  // Google Apps (commonly used in Google Drive)
  GOOGLE_DOCS = 'application/vnd.google-apps.document',
  GOOGLE_SHEETS = 'application/vnd.google-apps.spreadsheet',
  GOOGLE_SLIDES = 'application/vnd.google-apps.presentation',
  GOOGLE_FOLDER = 'application/vnd.google-apps.folder',

  // Miscellaneous
  MULTIPART_FORM_DATA = 'multipart/form-data',
  MULTIPART_MIXED = 'multipart/mixed',
}
