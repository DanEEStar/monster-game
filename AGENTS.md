# Project agent guidance

## Project

This is a Phaser 4 game using Phaser Editor v5, Vite, and TypeScript. Phaser Editor owns the generated scene structure; preserve that workflow when changing scene files.

## Commands

- `npm start` — run the development server at `http://localhost:8080`
- `npm run build` — create the production build in `dist/`
- `npm run typecheck` — run TypeScript checking
- `npm run lint -- --deny-warnings` — run Oxlint with warnings denied
- `npm run fmt:check` — verify Oxfmt formatting
- `npm test` — run Vitest

Run the relevant checks after changes. For broad changes, run all commands above.

## Source conventions

- Keep application code in `src/` and runtime assets in `public/`.
- Treat `dist/` as generated output; do not edit it manually.
- Prefer Phaser Editor for scene and component changes.
- Preserve `START OF COMPILED CODE`, `START-USER-IMPORTS`, and `START-USER-CODE` boundaries in generated scene files.
- Put handwritten scene behavior in the user-code regions so Phaser Editor regeneration does not overwrite it.
- Keep asset-pack paths and generated scene references synchronized when moving or renaming assets.

## Tooling

- Oxfmt configuration lives in `.oxfmtrc.json`.
- Vitest tests use `.test.ts` or `.spec.ts` filenames.
- Vitest currently uses the Node environment; browser or renderer tests need additional setup.
- Vite development and production settings live in `vite/config.dev.mjs` and `vite/config.prod.mjs`.

## Dependency changes

Use npm and update both `package.json` and `package-lock.json`. Prefer the project’s existing scripts and configuration patterns over introducing new abstractions.
