export const config = {
	// Directory configuration
	dir: {
		input: "content",          // default: "."
		includes: "../_includes",  // default: "_includes" (`input` relative)
		data: "../_data",          // default: "_data" (`input` relative)
		output: "_site"
	},

	// Pre-process *.md files with nunjucks (default: `liquid`)
	markdownTemplateEngine: "njk",

	// Pre-process *.html files with nunjucks (default: `liquid`)
	htmlTemplateEngine: "njk",

};

export default async function (eleventyConfig) {

	// Copy the contents of the `public` folder to the output folder
	// For example, `./public/css/` ends up in `_site/css/`
	eleventyConfig
		.addPassthroughCopy({
			"./public/": "/"
		})

};
