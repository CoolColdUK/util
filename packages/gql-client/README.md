# @coolcolduk/gql-client

GraphQL client helpers: assert no errors and require data on Apollo `FetchResult`.

## Summary (for AI)

- **What:** Helpers for Apollo Client `FetchResult`: throw if `result.errors` is present; `throwIfGqlError` also requires `result.data` (throws if null/undefined).
- **Exports:** `throwIfGqlError`, `validateGqlNoError`.
- **Use when:** After a GraphQL query/mutation you want to fail fast on errors or missing data.
- **Dependencies:** `@apollo/client`, `@coolcolduk/util`.

## Install

```bash
npm i @coolcolduk/gql-client
```

## API

| Function                     | Description                                                                                                       |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `throwIfGqlError(result)`    | Throws if `result.errors` is present; throws if `result.data` is null/undefined; otherwise returns `result.data`. |
| `validateGqlNoError(result)` | Throws if `result.errors` is present; does not touch `data`.                                                      |

## Usage

```ts
import {throwIfGqlError, validateGqlNoError} from '@coolcolduk/gql-client';
const data = throwIfGqlError(await client.query({query: MyQuery}));
```
