# vuejs-zullkit

### How To getting started

```sh
$ npm init vue@latest
$ fill any question
$ npm install
$ npm run dev

# Replace <a></a> tag to <RouterLink></RouterLink> also href => to
```

### Dependencies

```sh
$ npm install @volar-plugins/vetur@latest
```

### Install Tailwindcss

```sh
$ npm install -D tailwindcss postcss autoprefixer
$ npx tailwindcss init -p

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

# src/css/style.css
@tailwind base;
@tailwind components;
@tailwind utilities;

# npm run dev
```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```
