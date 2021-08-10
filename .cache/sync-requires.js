
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Volumes/Matt-SSD-Store/Projects/iups-website/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Volumes/Matt-SSD-Store/Projects/iups-website/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Volumes/Matt-SSD-Store/Projects/iups-website/src/pages/index.js")),
  "component---src-pages-oursocieties-js": preferDefault(require("/Volumes/Matt-SSD-Store/Projects/iups-website/src/pages/oursocieties.js"))
}

