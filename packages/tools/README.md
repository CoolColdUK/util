# @coolcolduk/bin

CLI and helpers for monorepo package scripts: switch packages between TS/JS, find package.json paths, read/write JSON.

## Summary (for AI)

- **What:** Build tooling and CLI: switch package type (TS/JS) for single package or all packages, recursive find of package.json paths, read/write JSON and package.json files. Used via `toTs` / `toJs` / `toTsPackages` / `toJsPackages` binaries.
- **Exports:** Helpers like `readJsonFile`, `writeJsonFile`, `writePackageJsonFile`, `recursiveFindPackages`, `findAllPackagesJsonPath`, `switchPackageTsJs`.
- **Use when:** Automating monorepo package format (TS vs JS) or batch file/package.json operations; not for app runtime.
- **Dependencies:** `prettier-package-json`. No Jest; tests not run.

## API

| Function                                 | Description                                                                        |
| ---------------------------------------- | ---------------------------------------------------------------------------------- |
| `readJsonFile(absolutePath)`             | Reads a JSON file; returns parsed object or undefined if missing (logs warning).   |
| `writeJsonFile(jsonPath, data)`          | Writes JSON or object to a file.                                                   |
| `writePackageJsonFile(outputPath, data)` | Writes a package.json file (e.g. with prettier-package-json).                      |
| `recursiveFindPackages(absolutePath)`    | Recursively finds package directories under path; returns array of absolute paths. |
| `findAllPackagesJsonPath(absolutePath)`  | Finds all package.json paths under directory.                                      |
| `switchPackageTsJs(absolutePath, isJs)`  | Switches a package between TypeScript and JavaScript (main/typings/files).         |

CLI binaries: `toTs`, `toJs`, `toTsPackages`, `toJsPackages`.

## Install

```bash
npm i @coolcolduk/bin
```

## Usage

CLI: `toTs`, `toJs`, `toTsPackages`, `toJsPackages`. Programmatic: import from package (e.g. `readJsonFile`, `switchPackageTsJs`).
