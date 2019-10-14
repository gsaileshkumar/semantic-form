import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import pkg from "./package.json";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default {
  input: "src/index.ts",
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  output: [
    {
      file: "dist/bundle.cjs.js",
      format: "cjs"
    },
    {
      file: "dist/bundle.es.js",
      format: "es"
    }
  ],
  plugins: [
    resolve({ extensions }),
    babel({
      extensions,
      exclude: "node_modules/**"
    }),
    typescript({
      typescript: require("typescript")
    }),
    terser()
  ]
};
