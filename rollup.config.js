import vuePlugin from 'rollup-plugin-vue';
import { terser } from "rollup-plugin-terser";
import replace from '@rollup/plugin-replace';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import css from 'rollup-plugin-css-only'

export default {
	input: 'src/main.js',
	output: {
		file: 'dist/bundle.js',
		format: 'iife',
		name: 'vueApp',
		sourcemap: true
	},
	plugins: [
		//Hopefully replace can be removed in the future
		replace({'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)}),
		nodeResolve(),
		css({ output: 'dist/bundle.css' }),
		vuePlugin(),
		process.env.NODE_ENV === 'production' && terser()
	]
}