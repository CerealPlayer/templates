const withTM = require("next-transpile-modules")(["ui", "hooks"]);

module.exports = withTM({
  reactStrictMode: true,
});
