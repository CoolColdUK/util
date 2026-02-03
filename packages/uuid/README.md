# @coolcolduk/uuid

UUID helpers: v7 UUID and hyphen-stripped fixed-length string.

## Summary (for AI)

- **What:** Wraps `uuid` (v7): `createUuid()` returns standard 36-char UUID; `createUuidString(length)` returns hex string without hyphens, truncated to `length` (default 32).
- **Exports:** `createUuid`, `createUuidString`.
- **Use when:** You need a stable UUID API (v7) or short unique hex strings; single dependency on `uuid`.
- **Dependencies:** `uuid`.

## Install

```bash
npm i @coolcolduk/uuid
```

## API

| Function                    | Description                                                               |
| --------------------------- | ------------------------------------------------------------------------- |
| `createUuid()`              | Returns a UUID v7 string (36 chars, with hyphens).                        |
| `createUuidString(length?)` | Returns UUID v7 with hyphens removed, truncated to `length` (default 32). |

## Usage

```ts
import {createUuid, createUuidString} from '@coolcolduk/uuid';

const id = createUuid(); // e.g. '018e...-7...-...'
const short = createUuidString(16); // 16-char hex, no hyphens
```
