import commonjs from "rollup-plugin-commonjs";
import filesize from "rollup-plugin-filesize";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default {
  input: "dist/index.js",
  output: {
    file: "dist/gh-components.bundled.js",
    format: "esm"
  },
  plugins: [
    resolve(),
    commonjs(),
    terser({
      warnings: true,
      module: true,
      mangle: {
        properties: {
          regex: /^__/
        }
      }
    }),
    filesize({
      showBrotliSize: true
    })
  ]
};
