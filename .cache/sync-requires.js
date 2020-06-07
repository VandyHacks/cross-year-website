const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/dmitrysemenov/Desktop/Working Material/cross-year-website/.cache/dev-404-page.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/Users/dmitrysemenov/Desktop/Working Material/cross-year-website/src/pages/404.tsx"))),
  "component---src-pages-about-tsx": hot(preferDefault(require("/Users/dmitrysemenov/Desktop/Working Material/cross-year-website/src/pages/About.tsx"))),
  "component---src-pages-events-tsx": hot(preferDefault(require("/Users/dmitrysemenov/Desktop/Working Material/cross-year-website/src/pages/Events.tsx"))),
  "component---src-pages-hackathons-tsx": hot(preferDefault(require("/Users/dmitrysemenov/Desktop/Working Material/cross-year-website/src/pages/Hackathons.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/dmitrysemenov/Desktop/Working Material/cross-year-website/src/pages/index.tsx"))),
  "component---src-pages-join-tsx": hot(preferDefault(require("/Users/dmitrysemenov/Desktop/Working Material/cross-year-website/src/pages/Join.tsx")))
}

