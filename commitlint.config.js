module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [2, "always", ["util", "node", "way", "relation", "changeset", "osmChange", "deps", "configurations"]],
  },
};
