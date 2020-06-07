// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-tsx": () => import("./../src/pages/404.tsx" /* webpackChunkName: "component---src-pages-404-tsx" */),
  "component---src-pages-about-tsx": () => import("./../src/pages/About.tsx" /* webpackChunkName: "component---src-pages-about-tsx" */),
  "component---src-pages-events-tsx": () => import("./../src/pages/Events.tsx" /* webpackChunkName: "component---src-pages-events-tsx" */),
  "component---src-pages-hackathons-tsx": () => import("./../src/pages/Hackathons.tsx" /* webpackChunkName: "component---src-pages-hackathons-tsx" */),
  "component---src-pages-index-tsx": () => import("./../src/pages/index.tsx" /* webpackChunkName: "component---src-pages-index-tsx" */),
  "component---src-pages-join-tsx": () => import("./../src/pages/Join.tsx" /* webpackChunkName: "component---src-pages-join-tsx" */)
}

