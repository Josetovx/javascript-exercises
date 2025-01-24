import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
];

// eslint.config.js
import js from "@eslint/js";

export default [
    js.configs.recommended,

    {
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn"
        }
    }
];