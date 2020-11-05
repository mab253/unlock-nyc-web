// configuration file

// add navigation menu
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
};

// add styles/css folder!
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('styles')
}

