# @coolcolduk/enum

Shared enums and types: Environment, HttpStatusCode, IsoCurrencyCode, MimeType, Logger.

## Summary (for AI)

- **What:** TypeScript enums and types used across @coolcolduk packages.
- **Exports:** Environment, HttpStatusCode, IsoCurrencyCode, MimeType, and types (Logger).
- **Use when:** Single source for MIME types, HTTP statuses, currency codes, environment.
- **Dependencies:** None.

## Install

`npm i @coolcolduk/enum`

## API

| Export            | Description                                           |
| ----------------- | ----------------------------------------------------- |
| `Environment`     | Enum: e.g. development, production, test.             |
| `HttpStatusCode`  | Enum: HTTP status codes (OK, NotFound, etc.).         |
| `IsoCurrencyCode` | Enum: ISO 4217 currency codes.                        |
| `MimeType`        | Enum: MIME types (image/png, application/json, etc.). |
| `Logger`          | Type: logger interface used across packages.          |

## Usage

```ts
import {MimeType, HttpStatusCode, Environment} from '@coolcolduk/enum';
```
