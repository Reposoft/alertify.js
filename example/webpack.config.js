
module.exports = {
  entry: "./demo",
  output: {
    path: __dirname,
    filename: "demo-bundle.js"
  },
  resolve: {
    alias: {
      "alertify-webpack": "../",
    }
  }
};
