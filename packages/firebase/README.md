# @coolcolduk/firebase

Firebase Admin helpers: auth, Firestore converters, document/subcollection services.

## Summary (for AI)

- **What:** firebase-admin helpers: auth, Firestore converters (timestamps), CRUD services, header/map/type utils.
- **Exports:** auth, converter, firestore (services, utils), header, map, type.
- **Use when:** Firebase Admin in Node; typed Firestore services or timestamp conversion.
- **Dependencies:** firebase-admin, express, @coolcolduk/util, @coolcolduk/typescript-util.

## API (main exports)

| Export / function                                     | Description                                                              |
| ----------------------------------------------------- | ------------------------------------------------------------------------ |
| `createFirestoreSubCollectionService<T>(...)`         | Factory for a typed Firestore subcollection CRUD service.                |
| `createFirestoreSubSubCollectionService<T>(...)`      | Factory for a sub-subcollection service.                                 |
| `createFirestoreSubCollectionDocumentService<T>(...)` | Factory for a single-document subcollection service.                     |
| `mapFirestoreTimestampToDateForObjectValue`           | Recursively maps Firestore Timestamp fields to Date in an object.        |
| Auth helpers                                          | Custom token and related auth utilities.                                 |
| Converter, header, map, type                          | Firestore converters, request/response header helpers, and shared types. |

## Install

`npm i @coolcolduk/firebase`

## Usage

```ts
import {createFirestoreSubCollectionService} from '@coolcolduk/firebase';
```
