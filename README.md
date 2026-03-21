# public-vault

`public-vault` contains the public Obsidian vault and the static site that will be published with GitHub Pages.

It is the public-facing slice of `@ubugeeei`'s task management system, and it is also the public request surface. In practice, an outside contributor can make a substantive task request by opening a pull request against this repository.

## Responsibilities

- store every public task as a Markdown file
- keep task notes flat under `vault/10-tasks`
- preserve graph edges through task IDs
- keep weekly and monthly focus visible in notes
- state clearly that this repository is only the public subset of the broader task landscape
- make it possible for outsiders to request work through pull requests
- generate a public dashboard from the vault contents

## Layout

- `vault`: the public Obsidian vault and source of truth
- `site`: the Vite-powered dashboard
- `scripts`: build-time utilities such as task extraction
- `.github/workflows`: GitHub Pages deployment

## Local development

```bash
vp install
vp run dev
```

## Build for GitHub Pages

```bash
vp run build
```

## Test

```bash
vp run test
```

The `dev`, `build`, and `test` tasks generate the public task data before they invoke the Vite+ command surface.
