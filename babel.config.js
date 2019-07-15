module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  env: {
    production: {}
  },
  plugins: [
    [
      "transform-inline-environment-variables",
      {
        include: ["NODE_ENV", "API", "BUGSNAG_API_KEY"]
      }
    ],
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true
      }
    ],
    ["@babel/plugin-proposal-optional-catch-binding"]
  ]
};
