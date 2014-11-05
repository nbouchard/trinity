ChooseStyles
============

A shared repo for the stylesheets

## Git Submodules
Since this is going to be used as a submodule here's how to use submodules. To start, you should probably [read this](http://git-scm.com/docs/git-submodule) and [this](http://blogs.atlassian.com/2013/03/git-submodules-workflows-tips/). Be warned, there are some peculiarities about submodules that can really [break down a git flow](http://codingkilledthecat.wordpress.com/2012/04/28/why-your-company-shouldnt-use-git-submodules/) so everyone needs to read up on the bad things that can happen with submodules and be very careful when commiting, branching etc. until you are comfortable.

### Initializing Submodules

If you are cloning the repo for the first time and want to include the submodules type:

```sh
git clone --recursive git://github.com/foo/bar.git
```

If you already have the repo cloned and need to initialize the submodules:

```sh
git clone git://github.com/foo/bar.git
cd bar
git submodule update --init --recursive
# NOTE: the abover command  will not update already initialized repos so you have to run this "git submodule update --recursive" again
# from here: http://stackoverflow.com/questions/10168449/git-update-submodule-recursive
```

### Update all submodules

Unfortunately git pull doesn't include submodules, so once you have updated your repo to update its submodules use:

```sh
git submodule foreach git pull
```

### Commiting changes within a submodule
Perhaps the most annoying part is that when you make changes within a submodule you must commit both the submodule changes and the parent repo changes seperately, e.g.:

```sh
# NOTE: app/styles is the submodule directory
emacs  app/styles/style.scss
# make your changes and save
cd app/styles
# commit the submodule changes
git commit . -m 'updating submodule'
cd -
# commit the parent repo changes
git commit app/styles -m 'made changes to submodule'
```

### Updating submodules along with ```git push```
But when you push the parent repo you must be sure to push the submodule along with it or your remote could have a reference to a submodule commit that doesn't exist on the remote.
```sh
git push --recurse-submodules=on-demand
# from here: http://stackoverflow.com/questions/5814319/git-submodule-push
```
