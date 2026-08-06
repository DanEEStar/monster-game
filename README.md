# Phaser 4 + Phaser Editor Vite TypeScript Template

A Phaser 4 game template for Phaser Editor v5 using Vite and TypeScript. It includes a development server, production build, asset-pack processing, and basic code-quality tooling.

## Stack

- [Phaser 4](https://phaser.io/)
- [Phaser Editor v5](https://phaser.io/editor)
- [Vite](https://vite.dev/)
- TypeScript
- Vitest for tests
- Oxlint and Oxfmt for linting and formatting

## Requirements

- Node.js supported by [Vite 8](https://vite.dev/guide/migration.html)
- npm
- An active [Phaser Editor](https://phaser.io/editor) subscription for editor workflows

## Getting started

Install dependencies and start the development server:

```bash
npm install
npm start
```

The development server runs at [http://localhost:8080](http://localhost:8080).

During development, the game can start directly at a scene with the `start` query parameter. For example:

```text
http://localhost:8080/?start=Level
```

## Commands

| Command                           | Description                                           |
| --------------------------------- | ----------------------------------------------------- |
| `npm install`                     | Install dependencies                                  |
| `npm start`                       | Start the Vite development server on port 8080        |
| `npm run build`                   | Create and post-process a production build in `dist/` |
| `npm run typecheck`               | Run the TypeScript compiler without emitting files    |
| `npm run lint`                    | Run Oxlint                                            |
| `npm run lint -- --deny-warnings` | Run Oxlint with warnings treated as errors            |
| `npm run fmt`                     | Format supported project files with Oxfmt             |
| `npm run fmt:check`               | Check formatting without changing files               |
| `npm test`                        | Run Vitest once                                       |
| `npm run test:watch`              | Run Vitest in watch mode                              |

Vitest is configured to pass when no tests exist yet. Add tests with a `.test.ts` or `.spec.ts` suffix.

## Project structure

```text
.
├── public/
│   └── assets/              # Runtime assets and asset packs
├── src/
│   ├── main.ts              # Phaser game bootstrap and scene registry
│   ├── scenes/              # Phaser scenes and Phaser Editor scene files
│   └── components/          # Phaser Editor component definitions
├── types/                   # Project-wide TypeScript declarations
├── vite/                    # Development and production Vite configs
├── phasereditor2d.config.json
├── vitest.config.ts
└── tsconfig.json
```

## Phaser Editor workflow

The project is configured through `phasereditor2d.config.json`. Phaser Editor-generated scene files contain compiled sections and user-code sections. Prefer making scene changes in Phaser Editor and keep user code inside the marked user-code regions so generated code can be safely regenerated.

The project uses the `@phaserjs/editor-scripts-base` script library. Additional Phaser Editor script libraries can be added through the editor configuration when needed.

## Asset packs

Runtime assets live under `public/assets/` and are served from the `/assets/` URL path. The template includes:

- `public/assets/preload-asset-pack.json` for loading-screen assets
- `public/assets/asset-pack.json` for the rest of the game assets

Add or update assets through Phaser Editor when possible so the generated asset packs stay in sync with the scenes that use them.

The production build runs `phaser-asset-pack-hashing` after Vite. It processes the generated files in `dist/` for cache-busting. Do not edit `dist/` manually; it is build output.

## Testing and quality checks

Vitest currently runs in the Node environment and is appropriate for pure game logic and utilities. Browser or renderer-level Phaser tests require additional browser/canvas test tooling and are not configured by default.

Before committing a change, run the checks relevant to it. For a full validation pass:

```bash
npm run fmt:check
npm run lint -- --deny-warnings
npm run typecheck
npm test
npm run build
```

## Production build and deployment

Build the game with:

```bash
npm run build
```

Upload the complete contents of `dist/` to a static web server. Because the Vite config uses a relative base path, the build can be hosted from a subdirectory as well as from a domain root.

## Resources

- [Phaser documentation](https://newdocs.phaser.io/)
- [Phaser examples](https://labs.phaser.io/)
- [Phaser Editor documentation](https://phaser.io/editor/docs)
- [Vite documentation](https://vite.dev/guide/)
- [TypeScript documentation](https://www.typescriptlang.org/docs/)
