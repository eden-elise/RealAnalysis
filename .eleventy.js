const markdownIt = require("markdown-it");
const texmath = require("markdown-it-texmath");
const katex = require("katex");

const md = markdownIt({ html: true }).use(texmath, {
  engine: katex,
  delimiters: "dollars",
});

// Depth-first topological sort over the `prerequisites` graph, so notes
// render everywhere (sidebar, topic pages, reference index) in dependency
// order — foundational first — without anyone hand-maintaining that order.
function topoSortNotes(notes) {
  const byId = new Map(notes.filter((p) => p.data.id).map((p) => [p.data.id, p]));
  const state = new Map(); // id -> "visiting" | "done"
  const sorted = [];

  function visit(page) {
    const id = page.data.id;
    if (state.get(id) === "done") return;
    if (state.get(id) === "visiting") {
      throw new Error(`Circular prerequisite dependency involving "${id}"`);
    }
    state.set(id, "visiting");
    for (const depId of page.data.prerequisites || []) {
      const dep = byId.get(depId);
      if (!dep) {
        throw new Error(
          `${page.inputPath}: unknown prerequisite id "${depId}"`
        );
      }
      visit(dep);
    }
    state.set(id, "done");
    sorted.push(page);
  }

  for (const page of notes) visit(page);
  return sorted;
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({
    "node_modules/katex/dist/katex.min.css": "assets/vendor/katex/katex.min.css",
    "node_modules/katex/dist/fonts": "assets/vendor/katex/fonts",
    "node_modules/@fontsource/fraunces/500.css": "assets/vendor/fonts/fraunces/500.css",
    "node_modules/@fontsource/fraunces/600.css": "assets/vendor/fonts/fraunces/600.css",
    "node_modules/@fontsource/fraunces/files": "assets/vendor/fonts/fraunces/files",
    "node_modules/@fontsource/source-sans-3/400.css": "assets/vendor/fonts/source-sans-3/400.css",
    "node_modules/@fontsource/source-sans-3/600.css": "assets/vendor/fonts/source-sans-3/600.css",
    "node_modules/@fontsource/source-sans-3/700.css": "assets/vendor/fonts/source-sans-3/700.css",
    "node_modules/@fontsource/source-sans-3/files": "assets/vendor/fonts/source-sans-3/files",
    "node_modules/@fontsource/ibm-plex-mono/400.css": "assets/vendor/fonts/ibm-plex-mono/400.css",
    "node_modules/@fontsource/ibm-plex-mono/500.css": "assets/vendor/fonts/ibm-plex-mono/500.css",
    "node_modules/@fontsource/ibm-plex-mono/files": "assets/vendor/fonts/ibm-plex-mono/files",
  });

  eleventyConfig.setLibrary("md", md);

  // Renders a single frontmatter string (e.g. `statement`) through the same
  // markdown+KaTeX pipeline as page body content, without wrapping it in <p>.
  eleventyConfig.addFilter("mathify", (content) => md.renderInline(content || ""));

  // A topic landing page's own note list, in the same dependency order as
  // everywhere else — filtered from the one global `notes` collection
  // rather than hand-maintained per topic folder.
  eleventyConfig.addFilter("inTopic", (notes, topicUrl) =>
    notes.filter((note) => note.url.startsWith(topicUrl))
  );

  // Every non-landing page, in dependency order, with cross-links resolved.
  // `prerequisites` is the only hand-authored relationship (an array of
  // `id`s); `usedByResolved` ("related results") is its computed inverse —
  // pages are never expected to hand-maintain a backlink list. An unknown
  // or duplicate id fails the build rather than rendering a dead link.
  eleventyConfig.addCollection("notes", (collectionApi) => {
    const rawNotes = collectionApi
      .getFilteredByGlob("src/**/*.{html,md}")
      .filter((page) => !page.data.landing);

    const seenIds = new Set();
    for (const page of rawNotes) {
      if (!page.data.id) continue;
      if (seenIds.has(page.data.id)) {
        throw new Error(`Duplicate note id "${page.data.id}" (${page.inputPath})`);
      }
      seenIds.add(page.data.id);
    }

    const sorted = topoSortNotes(rawNotes);
    const byId = new Map(sorted.filter((p) => p.data.id).map((p) => [p.data.id, p]));

    for (const page of sorted) page.data.usedByResolved = [];

    for (const page of sorted) {
      page.data.prerequisitesResolved = (page.data.prerequisites || []).map((id) => {
        const target = byId.get(id);
        return { id, url: target.url, title: target.data.title };
      });
      for (const prereq of page.data.prerequisitesResolved) {
        byId.get(prereq.id).data.usedByResolved.push({
          id: page.data.id,
          url: page.url,
          title: page.data.title,
        });
      }
    }

    return sorted;
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
