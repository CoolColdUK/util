export enum MimeType {
  // Text
  TEXT_CSS = 'text/css',
  TEXT_CSV = 'text/csv',
  TEXT_HTML = 'text/html',
  TEXT_JAVASCRIPT = 'text/javascript',
  TEXT_PLAIN = 'text/plain',
  TEXT_XML = 'text/xml',

  // Images
  IMAGE_BMP = 'image/bmp',
  IMAGE_GIF = 'image/gif',
  IMAGE_JPEG = 'image/jpeg',
  IMAGE_PNG = 'image/png',
  IMAGE_SVG = 'image/svg+xml',
  IMAGE_TIFF = 'image/tiff',
  IMAGE_WEBP = 'image/webp',

  // Audio
  AUDIO_AAC = 'audio/aac',
  AUDIO_FLAC = 'audio/flac',
  AUDIO_MPEG = 'audio/mpeg', // MP3
  AUDIO_OGG = 'audio/ogg',
  AUDIO_WAV = 'audio/wav',

  // Video
  VIDEO_3GP = 'video/3gpp', // 3GP
  VIDEO_AVI = 'video/x-msvideo', // Already present
  VIDEO_FLV = 'video/x-flv', // FLV
  VIDEO_MP4 = 'video/mp4', // Already present
  VIDEO_MPEG = 'video/mpeg', // Already present
  VIDEO_OGG = 'video/ogg',
  VIDEO_QUICKTIME = 'video/quicktime', // MOV
  VIDEO_WEBM = 'video/webm',
  VIDEO_WMV = 'video/x-ms-wmv',

  // Application
  APPLICATION_GZIP = 'application/gzip',
  APPLICATION_JSON = 'application/json',
  APPLICATION_MSWORD = 'application/msword', // .doc
  APPLICATION_OCTET_STREAM = 'application/octet-stream', // Generic binary
  APPLICATION_PDF = 'application/pdf',
  APPLICATION_POSTSCRIPT = 'application/postscript',
  APPLICATION_RTF = 'application/rtf',
  APPLICATION_SLA = 'application/sla',
  APPLICATION_VND_MS_EXCEL = 'application/vnd.ms-excel', // .xls
  APPLICATION_VND_MS_POWERPOINT = 'application/vnd.ms-powerpoint', // .ppt
  APPLICATION_VND_OPENXML_EXCEL = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // .xlsx
  APPLICATION_VND_OPENXML_POWERPOINT = 'application/vnd.openxmlformats-officedocument.presentationml.presentation', // .pptx
  APPLICATION_VND_OPENXML_WORD = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
  APPLICATION_XML = 'application/xml',
  APPLICATION_ZIP = 'application/zip',
  APPLICATION_FORM_URLENCODED = 'application/x-www-form-urlencoded ',

  // ebook
  APPLICATION_EPUB_EBOOK = 'application/epub+zip',
  APPLICATION_IBOOKS_EBOOK = 'application/x-ibooks+zip',
  APPLICATION_MOBIPOCKET_EBOOK = 'application/x-mobipocket-ebook',

  // Google Apps (commonly used in Google Drive)
  GOOGLE_DOCS = 'application/vnd.google-apps.document',
  GOOGLE_FOLDER = 'application/vnd.google-apps.folder',
  GOOGLE_SHEETS = 'application/vnd.google-apps.spreadsheet',
  GOOGLE_SLIDES = 'application/vnd.google-apps.presentation',

  // Miscellaneous
  MULTIPART_FORM_DATA = 'multipart/form-data',
  MULTIPART_MIXED = 'multipart/mixed',
  MULTIPART_ALTERNATIVE = 'multipart/alternative',
  MULTIPART_RELATED = 'multipart/related',
}
