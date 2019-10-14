import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import pkg from "./package.json";
import typescript from "rollup-plugin-typescript2";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default {
  input: "src/index.ts",
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  output: {
    file: "dist/bundle.cjs.js",
    format: "cjs"
  },
  plugins: [
    resolve({ extensions }),
    babel({
      extensions,
      exclude: "node_modules/**"
    }),
    typescript({
      typescript: require("typescript")
    })
  ]
};
