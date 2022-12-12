/** @type {import('next').NextConfig} */
const path = require("path");

console.log("path: ", path);

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
