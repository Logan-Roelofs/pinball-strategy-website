## To run Localy

- `npm run dev`
- `npm run build` // to make sure it builds

## To add to github pages

- next.config.js

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;
```

- settings > pages > Github actions

## Github Actions
- Make sure not to use any capital letters in the image names
