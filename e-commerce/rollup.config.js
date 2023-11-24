import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/App.jsx",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
  },
  plugins: [resolve({ extensions: [".js", ".jsx"] })],
};
