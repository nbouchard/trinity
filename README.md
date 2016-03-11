# ChooseUX

The User Experience Prototyping Repository and Pattern Library for Choose Energy products.

## Getting Started

1. Install [Node.js](http://nodejs.org/) from the main website. It is recommended that you install a version manager like [n](https://npmjs.org/package/n) after installing the base package, but it is not required.
2. Install git. Either [install git manually](http://git-scm.com/) or use the [GitHub Mac Client](https://mac.github.com). The GitHub Mac Client will automatically set git up for you. Also, it's highly recommended you [set up SSH Keys for your computer](https://help.github.com/articles/generating-ssh-keys/). If you are using the Mac client, GitHub will have automatically generated them for you.
3. Clone the ChooseUX GitHub repo. After setting up your GitHub account, run `git git@github.com:chooseenergy/ChooseUX.git` wherever you want ChooseUX to live on your filesystem or use the Mac client's Clone Repository feature.
4. Install Node Dependencies. In a Terminal window, navigate to the ChooseUX folder. Run `npm install` (you may need to run `sudo npm install` depending on your setup) to install the various Node.js dependencies.
5. Run the grunt server with `grunt`. The default task is set to run the site at [http://localhost:5585](http://localhost:5585).
    - By default, running `grunt` will run the `serve` task set.
    - To change the port on which the site runs, simply set it via Grunt.option when you run the `grunt` command: `grunt --port=9001`.
    - If you run into a conflict with Livereload from another server instance, you can override that via Grunt.option as well: `grunt --lrport=35001`

## Grunt Tasks

Built into ChooseUX's `Gruntfile.js` are a number of different predefined tasks to make UX Development easier.

### `grunt verify`

Grunt Verify is designed to allow someone to check the overall code quality of our site against our various coding style guides. We check code quality on our SCSS and JS.

#### JSHint

The classic JavaScript linter, we use the same `.jshintrc` config file across all our JavaScript projects. No JavaScript should be committed to ChooseUX without first passing [JSHint](http://jshint.com/).

#### SCSS Lint

For our SCSS files, we use [SCSS Lint](https://github.com/brigade/scss-lint) which works in much the same way as JSHint, but it references our YAML `.scss-lint.yml` SCSS Linter config.

It should be noted that we do not enforce SCSS linting rules as strictly as our JS linting. By default, our SCSS Lint is set up to report warnings but not fail the grunt task using the `--force` flag.

Running `gem update --system && gem install scss-lint` may be required to get SCSS linting to run.

### `grunt compile-html`

The `compile-html` task set currently exists just to run our HTML template renderer, Assemble.

#### Assemble

[Assemble.io](http://assemble.io) is the static site generator for our pattern library.

### `grunt compile-css`

The `compile-css` task set is how we generate all of our CSS used across our products. We are using Glue via the sprite-glue task runner to generate spritesheets, Libsass to generate CSS from SCSS, and then we run the resulting CSS through Autoprefixer.

#### Libsass

Thanks to the initial research done by [@cdrake](http://github.com/cdrake), we've now converted to [Libsass](http://libsass.org), and it works wonderfully. It's quite fast (approximately 700ms, which is about how fast it takes to load the tasks), has a great [Node.js implementation](https://github.com/sass/node-sass).

#### Autoprefixer

While the majority of our CSS will get prefixes automatically through [Bourbon](http://bourbon.io) mixins, [Autoprefixer](https://github.com/postcss/autoprefixer) allows us to specify a browser support matrix for these so our resultant CSS is more efficient and only targeting the required browsers.

### `grunt build`

The `grunt build` task set will clean the `dist` folder, then run the `compile-css` and `compile-html` tasks before copying all of the files back into the `dist` folder.

#### `grunt-contrib-clean`

The [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean) task runner deletes files in a given folder. We use this to clear out the `dist` folder prior to building the latest version of files.

#### `grunt-contrib-copy`

The [grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy) task runner is more or less the opposite of `clean`. It copies a set of files from one folder to another. We use this to copy over static assets into the `dist` folder whenever they are updated, or whenever we build.

### `grunt serve`

The `serve` task is the primary task set to use when wanting to start development work. It will run an initial `build` task which either compile or recompile your generated site. It will then launch a Livereload-enabled server and watch a variety of files while you are developing against ChooseUX.

#### `grunt-contrib-connect`

The [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect) task runner starts a server and has the ability to enable Livereload to let the server push changes made to files in `dist` to the browser. Once the server starts and exposes a static file server at `http://localhost:PORT`, it will automatically open in your default browser.

#### `grunt-contrib-watch`

The [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch) task runner will programmatically kick off task sets based on file activity:

- Reprocess the Gruntfile if it changes
- Rerun the `assemble:pages` portion of the `compile-html` task if a template, page, or partial changes.
- Rerun `sass:dist` to update the distributable CSS file if any of our SCSS files change.
- Clean `dist/js/` and `dist/data/` if a JS or Data file changes.

If you change anything that doesn't already have a watcher set up, run `grunt build`.

### Questions?

If you have any questions or requests, add it to the repo's [GitHub Issues](https://github.com/chooseenergy/ChooseUX/issues).
