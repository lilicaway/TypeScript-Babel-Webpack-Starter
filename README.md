# TypeScript-Babel-Webpack-Starter

# What is this?

This is a small sample repository that configures:

- Babel to transform TypeScript to plain JavaScript
- TypeScript for type-checking
- Webpack for HMR (Hot Mode Reload) and support for `.css` files.
- Prettier for formatting
- tslint for styles
- jasmine for testing

It is based on Microsoft's
[TypeScript-Babel-Starter](https://github.com/microsoft/TypeScript-Babel-Starter)
with ideas for Webpack based on sweetcoco's
[webpack-babel-boilerplate](https://github.com/sweetcoco/webpack-babel-boilerplate).

You can look into those projects to learn how to add extra configuration to this
repository.

# How do I use it?

## Building the repo

```sh
npm run build
```

## Type-checking the repo

```sh
npm run type-check
```

And to run in `--watch` mode:

```sh
npm run type-check:watch
```

## Serve in development mode

This includes HMR (Hot Mode Reload).

```sh
npm run serve-dev
```

## Serve in production mode

```sh
npm run serve-prod
```

## Run unit tests with Jasmine

```sh
npm run test
```

You can also check coverage with:

```sh
npm run testWithCoverage
```

## Format and style fixes

To detect and attempt to fix lint issues:

```sh
npm run tslint-fix
```

To auto-format all files:

```sh
npm run prettier-fix
```

To do both together:

```sh
npm run fix
```
