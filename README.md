# util

Monorepo of shared utility packages for TypeScript/Node.js projects.

## Packages

| Package                                                   | Description                                                                                                                             |
| --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| [@coolcolduk/axios](./packages/axios)                     | HTTP helpers: fetch files as buffer or File, extract filename/MIME type from headers                                                    |
| [@coolcolduk/crypto-util](./packages/crypto-util)         | Crypto helpers: SHA-256, AES encrypt/decrypt, PKCE build/extract, key derivation                                                        |
| [@coolcolduk/enum](./packages/enum)                       | Shared enums and types: Environment, HttpStatusCode, IsoCurrencyCode, MimeType, Logger                                                  |
| [@coolcolduk/etsy](./packages/etsy)                       | Etsy API client: OAuth, shops, listings, inventory, images, videos, helpers                                                             |
| [@coolcolduk/express](./packages/express)                 | Express app factory from route map, with CORS and error handler                                                                         |
| [@coolcolduk/firebase](./packages/firebase)               | Firebase Admin helpers: auth, Firestore converters, document/subcollection services                                                     |
| [@coolcolduk/google](./packages/google)                   | Google Drive helpers: list/download content and files, by folder or shared link                                                         |
| [@coolcolduk/gql](./packages/gql)                         | GraphQL server: create Apollo Server and integrate with Express                                                                         |
| [@coolcolduk/gql-client](./packages/gql-client)           | GraphQL client helpers: assert no errors and require data on Apollo FetchResult                                                         |
| [@coolcolduk/typescript-util](./packages/typescript-util) | Type-only utilities: optional/maybe types and promise type helpers                                                                      |
| [@coolcolduk/util](./packages/util)                       | General-purpose utilities: array, object, string, number, promise, retry, sleep, file, CSV, URL, regex, error, safe parse, test helpers |
| [@coolcolduk/uuid](./packages/uuid)                       | UUID helpers: v7 UUID and hyphen-stripped fixed-length string                                                                           |
| [@coolcolduk/bin](./packages/tools)                       | CLI and helpers for monorepo package scripts: switch packages between TS/JS, find package.json paths, read/write JSON                   |

## Release

To release all packages:

- **Patch:** `npm run release:patch`
- **Minor:** `npm run release:minor`
- **Major:** `npm run release:major`

Or use `npm run release:all` to run lint, test, build, and release in one command.

Publishing is handled by the GitHub Actions release workflow.
