ChooseStyles
============
We will now be using the [git subtree](http://blogs.atlassian.com/2013/05/alternatives-to-git-submodule-git-subtree/) command for managing our multiple repositories. There are a few new commands to learn, but this method is significantly superior to git submodules. Additional reading can be found [here](https://medium.com/@v/git-subtrees-a-tutorial-6ff568381844)

### Add subtree
git subtree add --prefix styles/base git@github.com:chooseenergy/ChooseStyles.git master —squash

### Add remote to track (for contributing)
git remote add -f choose-styles git@github.com:chooseenergy/ChooseStyles.git

### Pull changes
git subtree pull --prefix=styles/base --squash choose-styles master

### Contributing to Upstream
git subtree push --prefix styles/base choose-styles master
