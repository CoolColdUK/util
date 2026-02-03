# @coolcolduk/express

Express app factory from route map, with CORS and error handler.

## Summary (for AI)

- **What:** createExpress(routeMap, options) returns Express app; buildCorsOption; mapHandlerFunctionToHandler.
- **Exports:** createExpress, buildCorsOption, mapHandlerFunctionToHandler, ExpressMethod, types.
- **Use when:** Define routes as record and get configured app (GET/POST/PUT/DELETE/etc).
- **Dependencies:** express, cors, @coolcolduk/util, @coolcolduk/typescript-util.

## API

| Function / export                              | Description                                                                                                |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `createExpress(route, options?)`               | Builds an Express app from a route map (path → method + handler). Optional CORS, middleware, errorHandler. |
| `buildCorsOption(origin?, methods?, options?)` | Returns a CORS options object (origin, methods, optionsSuccessStatus, spread options).                     |
| `mapHandlerFunctionToHandler(fn)`              | Wraps an async handler that returns a value: sends result with `res.send(rtn)`, forwards errors to `next`. |
| `ExpressMethod`                                | Enum: get, post, put, delete, patch, options, head, all.                                                   |

## Install

`npm i @coolcolduk/express`

## API

| Function                                     | Description                                                                 |
| -------------------------------------------- | --------------------------------------------------------------------------- |
| createExpress(route, options?)               | Builds Express app from route map. Optional CORS, middleware, errorHandler. |
| buildCorsOption(origin?, methods?, options?) | Returns CORS options object.                                                |
| mapHandlerFunctionToHandler(fn)              | Wraps async handler: res.send(rtn), errors to next.                         |
| ExpressMethod                                | Enum: get, post, put, delete, patch, options, head, all.                    |

## Usage

```ts
import {createExpress, ExpressMethod} from '@coolcolduk/express';
```
