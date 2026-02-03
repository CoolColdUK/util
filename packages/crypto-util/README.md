# @coolcolduk/crypto-util

Crypto helpers: SHA-256, AES encrypt/decrypt, PKCE build/extract, and key derivation.

## Summary (for AI)

- **What:** Node `crypto`-based utilities for hashing, encryption, and OAuth PKCE (state/code_verifier/code_challenge).
- **Exports:** `sha256`, `sha256Encoded`, `createKey`, `encrypt`, `decrypt`, `encodeForUrl`, `decodeFromUrl`, `buildPkce`, `extractPkce`, `PkceData`.
- **Use when:** You need deterministic hashes, encrypt/decrypt with a string key, or PKCE flow; no external crypto lib beyond Node.
- **Dependencies:** None (Node built-in `crypto` only).

## Install

```bash
npm i @coolcolduk/crypto-util
```

## API

| Function / export                 | Description                                                                           |
| --------------------------------- | ------------------------------------------------------------------------------------- |
| `sha256(buffer)`                  | Returns SHA-256 hash of input string as a Buffer.                                     |
| `sha256Encoded(buffer, encoding)` | Returns SHA-256 hash in the given encoding (e.g. `'hex'`, `'base64'`).                |
| `createKey(key, length?)`         | Derives a key from string (sha256 base64, trimmed to `length`, default 32).           |
| `encrypt(key, text)`              | Encrypts text with AES-256-GCM; returns URL-safe encoded string.                      |
| `decrypt(key, encryptedText)`     | Decrypts string produced by `encrypt`.                                                |
| `encodeForUrl(src)`               | Encodes colon-separated string parts as base64 (for encrypted payload).               |
| `decodeFromUrl(encodedString)`    | Decodes string produced by `encodeForUrl`.                                            |
| `buildPkce(key, meta?)`           | Builds PKCE data: `state`, `codeVerifier`, `codeChallenge`; optional `meta` in state. |
| `extractPkce(key, state)`         | Decrypts and parses PKCE from `state`; returns `PkceData` with same shape.            |
| `PkceData`                        | Type: `{ state, codeVerifier, codeChallenge, meta? }`.                                |

## Usage

```ts
import {sha256, createKey, encrypt, decrypt, buildPkce, extractPkce} from '@coolcolduk/crypto-util';

const key = createKey('secret', 32);
const cipher = encrypt(key, 'plaintext');
const pkce = buildPkce('myKey');
const extracted = extractPkce('myKey', pkce.state);
```
