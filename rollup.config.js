import typescript from "@rollup/plugin-typescript";
import json from '@rollup/plugin-json';
import { importAssertionsPlugin } from 'rollup-plugin-import-assert';
import { importAssertions } from 'acorn-import-assertions';
import { dts } from 'rollup-plugin-dts'

import pkg from "./package.json";

export default [
    // browser-friendly UMD build
    {
        input: "src/index.ts",
        output: {
            name: "unlockTs",
            file: pkg.browser,
            format: "umd",
        },
        acornInjectPlugins: [importAssertions],

        plugins: [
            importAssertionsPlugin(),
            typescript({ tsconfig: "./tsconfig.json" }),
            json(),
        ],
    },
    {
        input: "src/index.ts",
        output: [
            { file: pkg.main, format: "cjs" },
            { file: pkg.module, format: "es" },
        ],
        acornInjectPlugins: [importAssertions],

        plugins: [
            importAssertionsPlugin(),
            typescript({ tsconfig: "./tsconfig.json" }),
            json(),
        ],
    },
    {
        input: "./build/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "es" }],
        plugins: [dts()],
    },

];
