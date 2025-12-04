// eslint.config.cjs
const js = require("@eslint/js");

module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "commonjs",
      globals: {
        // node + jest globals
        require: "readonly",
        module: "readonly",
        process: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        console: "readonly",
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
        beforeAll: "readonly",
        afterAll: "readonly"
      }
    },
    rules: {
      ...js.configs.recommended.rules
    },
    ignores: ["node_modules/", "coverage/", "dist/"]
  }
];
