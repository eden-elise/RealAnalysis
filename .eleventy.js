module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  // All non-landing pages, for the sidebar/reference-index collections.
  // Ordering/grouping by dependency (via `prerequisites` frontmatter) is
  // finalized once the note-page template is locked in Phase 2.
  eleventyConfig.addCollection("notes", (collectionApi) =>
    collectionApi.getFilteredByGlob("src/**/*.{html,md}").filter(
      (page) => !page.data.landing
    )
  );

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
