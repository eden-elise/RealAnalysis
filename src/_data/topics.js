// Single source of truth for the sidebar's topic list, so renaming or
// reordering a topic folder means editing this file, not hunting through
// templates. See DECISIONS.md (Phase 1) on why folder names stay cheap to change.
module.exports = [
  { url: "/logic-and-proof/", title: "Logic & Proof" },
  { url: "/axioms/", title: "Axioms" },
  { url: "/set-theory/", title: "Set Theory" },
  { url: "/ordered-fields/", title: "Ordered Fields" },
  { url: "/sequences/", title: "Sequences" },
  { url: "/continuity/", title: "Continuity" },
  { url: "/differentiation/", title: "Differentiation" },
  { url: "/integration/", title: "Integration" },
  { url: "/reference/", title: "Reference" },
];
