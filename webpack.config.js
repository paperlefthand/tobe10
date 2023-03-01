const path = require("path");
const MODE = "development";
const enabledSourceMap = MODE === "development";

module.exports = {
  mode: MODE,
  entry: "./src/main.tsx",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: path.resolve(__dirname, "tsconfig.json"),
            },
          },
        ],
      },
      {
        test: /\.css/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: enabledSourceMap,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  target: ["web"],
};
