# @coolcolduk/gql

GraphQL server: create Apollo Server and integrate with Express.

## Summary (for AI)

- **What:** Apollo Server + Express (e.g. @as-integrations/express5), type-graphql, graphql, CORS.
- **Exports:** createApolloServer and server setup.
- **Use when:** Ready-to-use Apollo + Express GraphQL server with type-graphql.
- **Dependencies:** @apollo/server, express, graphql, type-graphql, cors, @coolcolduk/enum.

## API

| Function                  | Description                                                                                        |
| ------------------------- | -------------------------------------------------------------------------------------------------- |
| `createApolloServer(...)` | Creates and configures an Apollo Server (GraphQL) for use with Express; integrates with Express 5. |

## Install

`npm i @coolcolduk/gql`

## Usage

```ts
import {createApolloServer} from '@coolcolduk/gql';
```
