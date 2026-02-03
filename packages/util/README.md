# @coolcolduk/util

General-purpose utilities: array, object, string, number, promise, retry, sleep, file, CSV, URL, regex, error, safe parse, and test helpers.

## Summary (for AI)

- **What:** Large util bag: array (chunk, unique, filter, combine, pad), object (get, set, pick, omit, transform, filter, merge), string, number, promise (mapPromiseSeries, mapPromiseFnSeries, mapPromiseLimit, withTimeout), retry/sleep, file (base64, validation), CSV, URL (buildUrlQuery), regex, error handling, safe parse (int/float/json), throw/undefined helpers, tube (bounded queue), test helpers (generateTestEach). Uses dot-path `get` for nested keys where applicable.
- **Exports:** Named exports from array, object, string, number, promise, retry, sleep, file, csv, delay, enum, error, regex, safe, trythrow, tube, url, testHelper.
- **Use when:** You need pure, typed helpers for collections, objects, async flow, retries, or parsing; depends only on `@coolcolduk/typescript-util`.
- **Dependencies:** `@coolcolduk/typescript-util`.

## API (by category)

| Category       | Examples (function → description)                                                                                                                                                                          |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **array**      | `chunk`, `uniqueArray`, `filterArrayNull`, `combineArraysObject`, `padArray`, `extractArrayLast`, `fillerArray`, `groupArrayByKey`, `selectArrayTernary`, `upsertArrayItem`, `castArray`, `toObject`, …    |
| **object**     | `get(path)` (dot-path), `set`, `setPure`, `setBulk`, `pick`, `omit`, `filterObject`, `transformObjectKey`, `transformObjectValue`, `mergeReplaceArray`, `buildObjectWhenExists`, `compareObjectShallow`, … |
| **string**     | `castArrayToString`, `castStringToArray`, `jsonParseSafe`, `mapEnglishToCapFirstWord`, …                                                                                                                   |
| **number**     | `ceilNumberStep`, `floorNumberStep`, `roundNumberStep`, `randomNumberRange`, `rangeNumber`.                                                                                                                |
| **promise**    | `mapPromiseSeries`, `mapPromiseFnSeries`, `mapPromiseLimit`, `mapPromiseFnData`, `somePromiseFnData`, `timeoutPromise`, `withTimeout`.                                                                     |
| **retry**      | `retry`, `repeatTillComplete`, `repeatTillCompleteResult`, `repeatWithTimeout`, `loopTill`.                                                                                                                |
| **sleep**      | `sleepMs`, `sleepSecs`, `sleepMins`.                                                                                                                                                                       |
| **file**       | `fileToBase64`, `base64ToFile`, `validateBase64ObjectFileSize`, `extractFilenameWithoutExtension`, …                                                                                                       |
| **url**        | `buildUrlQuery`.                                                                                                                                                                                           |
| **safe**       | `safeParseInt`, `safeParseFloat`, `safeParseJson`, `runSafe`.                                                                                                                                              |
| **trythrow**   | `throwIfNull`, `throwIfUndefined`, `throwNewError`, `undefinedIfThrow`.                                                                                                                                    |
| **tube**       | `enterTube`, `exitTube`, `fixTubeSize` (bounded queue).                                                                                                                                                    |
| **csv**        | `convertCsvToObject`.                                                                                                                                                                                      |
| **delay**      | `runDelay`.                                                                                                                                                                                                |
| **enum**       | `mapStringToEnumValue`, `mapEnumValueToEnumKey`.                                                                                                                                                           |
| **error**      | `catchErrorMessageWhenThrown`, `validateErrorRequest`.                                                                                                                                                     |
| **regex**      | `regexEmail`, `regexUrl`.                                                                                                                                                                                  |
| **testHelper** | `generateTestEach` (parametrised test data).                                                                                                                                                               |

## Install

```bash
npm i @coolcolduk/util
```

## Usage

```ts
import {chunk, get, set, mapPromiseFnSeries, sleepMs, buildUrlQuery, safeParseInt} from '@coolcolduk/util';
```
