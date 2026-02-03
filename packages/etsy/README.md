# @coolcolduk/etsy

Etsy API client: OAuth, shops, listings, inventory, images, videos, helpers.

## Summary (for AI)

- **What:** Etsy REST API: auth (OAuth/PKCE), shops, listings CRUD/draft/inventory/properties, images/files/videos, user/me, helpers.
- **Exports:** getEtsyListing, createEtsyDraftListing, uploadEtsyListingImage, interfaces, enums, helpers, ETSY_API_ENDPOINT.
- **Use when:** Etsy seller integration; needs app credentials and callback URL in Etsy Developer.
- **Dependencies:** axios, express, zod, lodash, @coolcolduk/axios, @coolcolduk/crypto-util, @coolcolduk/enum, @coolcolduk/util, @coolcolduk/typescript-util.

## OAuth callback

Register: https://www.etsy.com/uk/developers/edit/<app_id>/callbacks

## API (main functions)

| Function                                                                                   | Description                                                                                         |
| ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| `getEtsyAxios(apiKey?, secret?, accessToken?, options?)`                                   | Returns configured axios instance for Etsy API.                                                     |
| `getEtsyListing(apiKey, secret, listingId)`                                                | Fetches a single listing by ID.                                                                     |
| `getEtsyListingsByShop(...)`                                                               | Fetches listings for a shop with filters.                                                           |
| `createEtsyDraftListing(...)`                                                              | Creates a draft listing.                                                                            |
| `deleteEtsyListing(...)`, `updateEtsyListing(...)`                                         | Delete or update a listing.                                                                         |
| `uploadEtsyListingImage(...)`, `uploadEtsyListingFile(...)`, `uploadEtsyListingVideo(...)` | Upload media for a listing.                                                                         |
| `getShop(...)`, `findEtsyShops(...)`, `updateShop(...)`                                    | Shop read/update.                                                                                   |
| `getEtsyMe(...)`, `getEtsyUser(...)`                                                       | Current user / user by ID.                                                                          |
| `pingEtsy(apiKey, secret)`                                                                 | Ping the API.                                                                                       |
| `ETSY_API_ENDPOINT`                                                                        | Constant base URL. Plus enums, interfaces, and helpers (fetch all listings, download/upload video). |

## Install

`npm i @coolcolduk/etsy`

## API (main functions)

| Function                               | Description                                         |
| -------------------------------------- | --------------------------------------------------- |
| getEtsyAxios(...)                      | Returns configured axios instance for Etsy API.     |
| getEtsyListing(...)                    | Fetches a single listing by ID.                     |
| getEtsyListingsByShop(...)             | Fetches listings for a shop.                        |
| createEtsyDraftListing(...)            | Creates a draft listing.                            |
| uploadEtsyListingImage/File/Video(...) | Upload media for a listing.                         |
| getShop, findEtsyShops, updateShop     | Shop read/update.                                   |
| getEtsyMe, getEtsyUser                 | User and current user.                              |
| pingEtsy(apiKey, secret)               | Ping the API.                                       |
| ETSY_API_ENDPOINT                      | Constant base URL. Plus enums, interfaces, helpers. |

## Usage

```ts
import {getEtsyListing, getEtsyAxios} from '@coolcolduk/etsy';
```
