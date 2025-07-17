
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/vasanth/Documents/nft/webpage/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/vasanth/Documents/nft/webpage/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/vasanth/Documents/nft/webpage/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/vasanth/Documents/nft/webpage/src/pages/index.js")),
  "component---src-pages-members-js": preferDefault(require("/Users/vasanth/Documents/nft/webpage/src/pages/members.js")),
  "component---src-pages-publications-js": preferDefault(require("/Users/vasanth/Documents/nft/webpage/src/pages/publications.js"))
}

