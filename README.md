## To add a new book
- make a folder in app/books/NameOfBook/page.tsx 
- copy another books page.tsx as a template
- Add book to home page at app/page.tsx 

## To run Localy 
- `npm run dev`

## To add to github pages 
- next.config.js 
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;
```
- settings > pages > Github actions 