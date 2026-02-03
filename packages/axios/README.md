# @coolcolduk/axios

Axios helpers: fetch file as buffer or File, extract filename and MIME type from headers.

## Summary (for AI)

- **What:** Download files from URL (buffer or File), parse Content-Disposition/Content-Type.
- **Exports:** `fetchFile`, `fetchFileAsBuffer`, `extractFilenameFromHeader`, `extractMimeTypeFromHeader`.
- **Use when:** File download + metadata from URL; uses `@coolcolduk/enum`, `@coolcolduk/util`.
- **Dependencies:** axios, @coolcolduk/enum, @coolcolduk/util.

## Install

`npm i @coolcolduk/axios`

## API

| Function                                  | Description                                                           |
| ----------------------------------------- | --------------------------------------------------------------------- |
| `fetchFile(url, filename, overrideType?)` | Downloads from URL and returns a `File` (browser-friendly).           |
| `fetchFileAsBuffer(url)`                  | Fetches from URL; returns `{ buffer, type, filename }`.               |
| `extractFilenameFromHeader(headers)`      | Parses `Content-Disposition` and returns the filename if present.     |
| `extractMimeTypeFromHeader(headers)`      | Parses `Content-Type` and returns a `MimeType` enum value if matched. |

## Usage

```ts
import {fetchFile, fetchFileAsBuffer} from '@coolcolduk/axios';
const file = await fetchFile(url, filename);
const {buffer, type, filename} = await fetchFileAsBuffer(url);
```
