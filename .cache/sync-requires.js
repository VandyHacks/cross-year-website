const { hot } = require("react-hot-loader/root");

// prefer default export if available
const preferDefault = m => (m && m.default) || m;

exports.components = {
  "component---src-pages-404-tsx": hot(
    preferDefault(
      require("/Users/chinchuluunmunkh-achit/dev/cross-year-website/src/pages/404.tsx")
    )
  ),
  "component---src-pages-about-tsx": hot(
    preferDefault(
      require("/Users/chinchuluunmunkh-achit/dev/cross-year-website/src/pages/about.tsx")
    )
  ),
  "component---src-pages-events-tsx": hot(
    preferDefault(
      require("/Users/chinchuluunmunkh-achit/dev/cross-year-website/src/pages/events.tsx")
    )
  ),
  "component---src-pages-index-tsx": hot(
    preferDefault(
      require("/Users/chinchuluunmunkh-achit/dev/cross-year-website/src/pages/index.tsx")
    )
  ),
  "component---src-pages-join-tsx": hot(
    preferDefault(
      require("/Users/chinchuluunmunkh-achit/dev/cross-year-website/src/pages/join.tsx")
    )
  ),
  "component---src-pages-years-2018-tsx": hot(
    preferDefault(
      require("/Users/chinchuluunmunkh-achit/dev/cross-year-website/src/pages/years/2018.tsx")
    )
  ),
  "component---src-pages-years-2019-tsx": hot(
    preferDefault(
      require("/Users/chinchuluunmunkh-achit/dev/cross-year-website/src/pages/years/2019.tsx")
    )
  ),
  "component---src-pages-years-2020-tsx": hot(
    preferDefault(
      require("/Users/chinchuluunmunkh-achit/dev/cross-year-website/src/pages/years/2020.tsx")
    )
  )
};
