# @coolcolduk/typescript-util

Type-only utilities: optional/maybe types and promise type helpers.

## Summary (for AI)

- **What:** Typing helpers only (no runtime code): optional/maybe types and `MaybePromise<T>` for async signatures.
- **Exports:** `Maybe`, `May`, `MaybePromise`, and related types from `maybe` and `optional` modules.
- **Use when:** You need consistent optional/nullable or sync-or-promise types across @coolcolduk packages; zero runtime dependency.
- **Dependencies:** None.

## Install

```bash
npm i @coolcolduk/typescript-util
```

## API

| Type / export     | Description                                           |
| ----------------- | ----------------------------------------------------- |
| `Maybe<T>`        | Type alias: `T \| null \| undefined`.                 |
| `May<T>`          | Type alias: `T \| undefined`.                         |
| `MaybePromise<T>` | Type: `T \| Promise<T>` for sync-or-async signatures. |
| `optional` module | Re-exports for optional/conditional types.            |
| `maybe` module    | Re-exports for maybe/nullable types.                  |

## Usage

```ts
import type {Maybe, MaybePromise} from '@coolcolduk/typescript-util';
```
