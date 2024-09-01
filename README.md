# Turborepo Fullstack App

This app is a monorepo that utilizes [Turborepo](https://turbo.build/repo/docs).

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `frontend`: a [React](https://react.dev/) app using [Apollo client](https://www.apollographql.com/docs/react/) and [TailwindCSS](https://tailwindcss.com/docs/installation).
- `backend`: a [postgresql](https://www.postgresql.org/) database with an [Apollo server](https://www.apollographql.com/docs/apollo-server/) API utilizing [Prisma](https://www.prisma.io/docs) as an ORM with [Pothos](https://pothos-graphql.dev/docs) as a GraphQL schema builder for typescript.
- `@repo/eslint-config`: `eslint` configurations
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

[TypeScript](https://www.typescriptlang.org/) is utilized on both the frontend and backend.

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd fullstack-ts
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd fullstack-ts
pnpm dev
```
