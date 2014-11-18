## [Git Sub-Tree](http://blogs.atlassian.com/2013/05/alternatives-to-git-submodule-git-subtree/)
Additional reading can be found [here](https://medium.com/@v/git-subtrees-a-tutorial-6ff568381844)

### Adding a Subtree
```sh
git subtree add --squash  --prefix styles/base git@github.com:chooseenergy/ChooseStlyes.git master
```

### Adding the remote
```sh
git remote add -f shopping git@github.com:chooseenergy/shopping.git
```

### Contributing Upstream
Once you have made changes that have been accepted in a repo you may need to update the sub-tree that it depends on. This can be done easily (assuming you added the remote above)
```sh
git subtree push --prefix shopping shopping master
```

### Pulling Upstream
The same applies for pulling changes:
```sh
git subtree pull --squash --prefix shopping master
```
