# @coolcolduk/google

Google Drive helpers: list/download content and files, by folder or shared link.

## Summary (for AI)

- **What:** Google Drive API: list content, get file, download file(s)/folder/by URL; extract file/folder ID from URLs.
- **Exports:** Drive (content, file, helper), GDriveContent/GDriveResponse, util (axios, extract, status).
- **Use when:** List or download files from Google Drive (including shared links).
- **Dependencies:** axios, @coolcolduk/enum, @coolcolduk/util, @coolcolduk/typescript-util.

## API (main exports)

| Function                                                          | Description                                                      |
| ----------------------------------------------------------------- | ---------------------------------------------------------------- |
| `listGDriveContent(...)`                                          | Lists content (files/folders) in a Drive folder or by query.     |
| `getGDriveFile(...)`                                              | Gets a single file metadata or download.                         |
| `getGDriveContent(...)`                                           | Gets content (file or folder listing).                           |
| `gdriveHelperDownloadFile(...)`, `gdriveHelperDownloadFiles(...)` | Download one or many files.                                      |
| `gdriveHelperDownloadFilesInFolder(...)`                          | Download all files in a folder.                                  |
| `gdriveHelperDownloadFileWithUrl(...)`                            | Download by shared Drive URL.                                    |
| `extractGDriveContentIdFromUrl(url)`                              | Extracts file/folder ID from a Drive URL.                        |
| `extractGDriveFolderIdFromUrl(url)`                               | Extracts folder ID from a Drive URL.                             |
| `isGDriveMimeTypeFolder(mimeType)`, `isGDriveSharedLink(url)`     | Type/URL helpers. Plus types: `GDriveContent`, `GDriveResponse`. |

## Install

`npm i @coolcolduk/google`

## Usage

```ts
import {listGDriveContent, getGDriveFile} from '@coolcolduk/google';
```
