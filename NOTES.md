
Webpack
===

- [HTML copy](https://github.com/jantimon/html-webpack-plugin)
	- https://stackoverflow.com/a/33519539/39321
- Vue.js
	- https://vuejs-templates.github.io/webpack/
	- https://vuex.vuejs.org/en/getting-started.html
	- https://vuejs.org/v2/guide/installation.html
	- https://vuejs.org/v2/guide/single-file-components.html
	- https://github.com/vuejs/awesome-vue#source-code-editing
- Webpack
	- https://blog.envylabs.com/getting-started-with-webpack-2-ed2b86c68783
	- https://yarnpkg.com/en/docs/install#windows-tab
- Babel
	- http://babeljs.io/docs/plugins/transform-async-to-generator/
	- http://babeljs.io/docs/plugins/transform-strict-mode/
	- https://sebastiandedeyne.com/posts/2017/whats-in-our-babelrc

- Process:
	- `npm init -y`
	- `npm install --save-dev webpack`
	- `npm install --save-dev html-webpack-plugin`
	- `npm install --save-dev clean-webpack-plugin`
	- `npm install --save-dev babel-loader babel-core babel-preset-env`
	- Add `webpack.config.js`
	


Notes to self
===

* (!) BUG: Weird input-bouncing in Chrome...
* [In-browser file access/render](https://scotch.io/tutorials/use-the-html5-file-api-to-work-with-files-locally-in-the-browser)

* Input
	* Auto-sort current on top, DESC latest, ASC duration

* Output
	* Highlight "currents" (no end-date)
	* Add age to `born`
	* Add name to `<title>` in head
	* Keep in sync with input (web worker?)



Storage
===

* `accounts.[ct]sv` (Sorted by email?)
	* `<email>`
	* `<id>` (uniqid?)
	* `<password-hash>`
* `<id>`
	* `cv.json`
	* `<variant>.json`
*  method="post" action="(auto)save" enctype="multipart/form-data"



JSON
===

* [JSON Validator](https://korzio.github.io/djv)
* [Schema Validator](https://www.jsonschemavalidator.net)
* [JSON Resumé](https://jsonresume.org)
	* [Schema sample](https://jsonresume.org/schema)
	* As is? Simplified version?

More data?
---

* Personalia
	* `title` (e.g. Software Engineer)
	* `driving-license` (Country + text?)

* Profiles
	* `name` (e.g. Twitter, Facebook, GitHub, StackOverflow)
	* `id`
	* `url` (auto-generate for known names?)

* Work
	* `area` (e.g. telecom?)
	* `website` (url)
	* `summary`
	* `highlights[string]`
	* `projects[work]` (for consultancy type stuff... too complex?)

* Education
	* `area` (e.g. computer engineer)
	* `type` (e.g. normal|null, further, course, etc.)
	* `keywords` (e.g. Webdesign, 2MX, etc.)

* Languages
	* `level` (e.g. 1st, fluent, average, understand)

* Awards
