import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";

const packageJson = await import("./package.json", {
	assert: { type: "json" },
});

export default [
	// JS build
	{
		input: "src/index.ts", // entry point
		output: [
			{
				file: packageJson.default.module, // "dist/index.esm.js"
				format: "esm",
				sourcemap: true,
			},
			{
				file: packageJson.default.main, // "dist/index.cjs.js"
				format: "cjs",
				sourcemap: true,
			},
		],
		plugins: [
			peerDepsExternal(),
			resolve(),
			commonjs(),
			typescript({ tsconfig: "./tsconfig.json" }),
		],
	},
	// Type declarations
	{
		input: "src/index.ts",
		output: [{ file: "dist/index.d.ts", format: "es" }],
		plugins: [dts()],
	},
];
