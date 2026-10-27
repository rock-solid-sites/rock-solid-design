# Consume Rock Solid Design

## Current package

`rock-solid-design` v0.1.0 is a **source revision**, not published on npm and not yet tagged as a release. Source code is public; downstream projects should pin an immutable Git commit, not an unversioned branch.

Use at build time with Astro/Vite or another bundler:

```css
@import 'rock-solid-design/tokens.css';
```

`foundations.css` is **optional** and itself imports tokens. It includes generic page styles; don't import it on top of an existing global reset without reviewing selector conflicts.

The site separately supplies its own fonts, branded components, content, security form endpoint, and deployment configuration.

## Release discipline

1. Commit changes and pass public tests.
2. Review token equivalence against the originating approved site and sample schematics at actual component sizes.
3. Make an immutable version commit and optional Git tag/release once approval is recorded.
4. Consumer updates reference that exact version/commit in `package.json` and lockfile.
5. Require `npm ci`, static build, contract tests, site browser tests and output/performance checks before merge.
6. Preserve independent version histories; never copy the private site's Git history or editorial content to this repository.

No initial publish to a registry is implied.
