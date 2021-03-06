const withFonts = require("next-fonts");
// const withPlugins = require("next-compose-plugins");
// const nextImg = require("next-img/plugin");

module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

module.exports = withFonts();

// module.exports = withPlugins([
//   [
//     nextImg,
//     {
//       // specify the default breakpoints
//       breakpoints: [375, 768, 1280],
//     },
//   ],
// ]);
