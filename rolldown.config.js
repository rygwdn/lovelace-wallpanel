export default {
	input: "wallpanel-src.js",
	output: {
		file: "wallpanel.js",
		format: "iife",
        sourcemap: false,
        minify: {
            compress: true,
            mangle: false,
            removeWhitespace: false,
        },
		name: "WallPanel"
	},
    transform: {
        target: 'es2015',
    },
} 