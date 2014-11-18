## [Git Sub-Tree](http://blogs.atlassian.com/2013/05/alternatives-to-git-submodule-git-subtree/)
Additional reading can be found [here](https://medium.com/@v/git-subtrees-a-tutorial-6ff568381844)
> Caveats
Contributing back and forth between repos is definitely more complicated. To simplify potential merge conflicts, pulling changes from the libraries should be done in separate pull requests. Also, rebasing after subtree pulls don’t work (on rebases, git loses track of the —prefix, so you will have a big mess in your project’s root).

### Adding a Subtree
```sh
git subtree add --squash --prefix <prefix> <repository> <branch>
# i.e. git subtree add --squash  --prefix styles/base git@github.com:chooseenergy/ChooseStyles.git master
```

### Adding the remote
```sh
git remote add -f <remote-name> <repository>
# i.e. git remote add -f shopping git@github.com:chooseenergy/shopping.git
```

### Contributing Upstream
Once you have made changes that have been accepted in a repo you may need to update the sub-tree that it depends on. This can be done easily (assuming you added the remote above)
```sh
git subtree push --prefix <prefix> <remote-name> <branch>
```

### Pulling Upstream
The same applies for pulling changes:
```sh
git subtree pull --squash --prefix <prefix> <remote-name> <branch>
```
