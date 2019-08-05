---
title: Git notes
date: "2019-03-14T21:12:03.284Z"
description: Personal notes on Git
---

### Merge and Rebase:

Interactive rebasing
 it offers complete control over the branch’s commit history
git rebase -i master
The golden rule of git rebase is to never use it on public branches.
So, before you run git rebase, always ask yourself, “Is anyone else looking at this branch?” If the answer is yes, take your hands off the keyboard and start thinking about a non-destructive way to make your changes (e.g., the git revert command)
gitk git bisect

.gitignore
Git sees every file in your working copy as one of three things.

1. Tracked
2. Untracked
3. Ignored

Ignoring a previously committed file

```
$ echo debug.log >> .gitignore
$ git rm --cached debug.log
rm 'debug.log'
\$ git commit -m "Start ignoring debug.log"
```

Undoing commits & changes

Aborting merge conflict

```
git reset --hard HEAD

git reset
```

Reverting a rebase

```
git reflog
git reset —hard HEAD@{2}
```

Remove all your local git branches but keep master

```
git branch | grep -v "master" | xargs git branch -D
```

Push a rebased local branch by using `--force-with-lease`

```
git push —force-with-lease
```

Polish my git feature branch before merging or submitting for review

```
git rebase -i COMMITHASH
```

to the commit

```
git commit —fixup COMMITHASH
```

```
git rebase -i —autosquash COMMITHASH
```

Auto Squash

```
git merge --squash app-refactoring
```

To take out entire commit

```
`git reset HEAD~`
```

Undo a commit that has already been pushed to the remote repository

```
git revert c011d0f
```

Temporarily store some work in progress because I have to jump to another branch

```
git stash
git stash list
git stash pop
git stash apply
```

Delete all the branches other than master

```
git branch | grep -v "master" | xargs git branch -D
```

Keep the file as is in the master, exclude local changes from git

```
# To skip git
git update-index --skip-worktree <file>

# Revert
git update-index --no-skip-worktree <file>
```

```
# To find commits of the author
git log --author=Oguzhan

# Check commit with message
git show --color --pretty=format:%b c2b88ed806fb5728a376bddab0c0e6d13d1ee15a

```

### References

- https://www.atlassian.com/git/tutorials/merging-vs-rebasing
- https://www.atlassian.com/git/tutorials/gitignore
