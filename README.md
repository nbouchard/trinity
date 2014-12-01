ChooseUX
========

User Experience Prototyping Repository and Style Guide

Getting Started
===========

1. Install Ruby
	- **Mac**: Ruby should already be installed on your machine. Check for `ruby` in Terminal if you are unsure. If you do not have Ruby installed, you can get it [here from Ruby](https://www.ruby-lang.org/en/downloads/). It is recommended that use a version manager like [rvm](https://rvm.io/rvm/install) to manage your Ruby installations, but it is not required.
2. Install Compass/SASS
	- **Mac**: Install [Compass](http://compass-style.org/install/) via `gem install compass`.
3. Install Bootstrap (SASS)
	- **Mac**: Install [Bootstrap](http://getbootstrap.com/) via `gem install bootstrap-sass`.
4. Install Breakpoint
	- **Mac**: Install [Breakpoint](http://breakpoint-sass.com/) via `gem install breakpoint`.
5. Install Node.js
	- **Mac**: Install [Node.js](http://nodejs.org/) from the main website. Similar to Ruby, it is recommended that you install a version manager like [n](https://npmjs.org/package/n) after installing the base package.
6. Install git.
	- **Mac**: Either [install git manually](http://git-scm.com/) or use the [GitHub Mac Client](https://mac.github.com). The GitHub Mac Client will automatically set git up for you. Also, it's highly recommended you [set up SSH Keys for your computer](https://help.github.com/articles/generating-ssh-keys/). If you are using the Mac client, GitHub will have automatically generated them for you.
7. Clone the ChooseUX GitHub repo.
	- **Mac**: After setting up your GitHub account, run `git git@github.com:chooseenergy/ChooseUX.git` wherever you want ChooseUX to live on your filesystem or use the Mac client's Clone Repository feature.
8. Set Compass to Watch for Changes in the ChooseUX root folder.
  - **Mac**: Open a Terminal window and navigate to the ChooseUX folder. Run `compass watch ./` to autocompile the result CSS as you update the `.scss` source files.
9. Install Node Dependencies
  - **Mac**: In a Terminal window, navigate to the ChooseUX folder. Run `npm install` (you may need to run `sudo npm install` depending on your setup) to install the static site server's dependencies.
10. Install Front-end Dependencies
  - **Mac**: In a Terminal window, navigate to the ChooseUX folder. Run `bower install` to install Angular.js and [ChooseComponents](https://github.com/chooseenergy/ChooseComponents).
11. Run the server.
  - **Mac**: In a Terminal window, navigate to the ChooseUX folder. Run `node static.js` to run the site at [http://localhost:5585](http://localhost:5585). To change the port the site runs at, simply set it via the environment variable `CE_UX_PORT`  when starting the server like so: `CE_UX_PORT=9000 node static.js`
  
