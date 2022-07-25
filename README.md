# digital-security-privacy-tips-api

I was inspired by the [personal-security-checklist](https://github.com/Lissy93/personal-security-checklist) to create and API that responds with digital security and privacy tips in JSON format.

**See it live:** [:link:](https://)

**Query the API:** [Postman](https://www.postman.com/) or ``curl -v https://``

![screenshot](https://raw.githubusercontent.com/menuscreen/digital-security-privacy-tips-api/main/.github/images/screenshot.png)[1]

[1]: https://

## How It's Made

**Tech used:** JavaScript, Node, Express, MongoDB

I set up my project using Windows Subsystem for Linux (WSL) and VS Code remote development tools. This allows you to use VS Code on Windows to develop with linux-based tools, runtimes, and utilities. I created a repository on my linux subsystem and use VS Code to access the files and use the terminal in VS Code to mainly run git commands within it.

## Lessons Learned

The default branch name for newly created repos at GitHub is called ``main``, however the git software default is ``master``. Depending on where you created your repo and how you like to push code, you could run into a problem. I initially created my repo on GitHub but my first commits from my linux subsystem did not have the ``main`` branch name but the ``master`` branch name. While its just a naming convention, I like to see ``main`` and tried to change it as such. Since I had already made commits under the ``master`` name I ended up creating a different branch and ran into a fatal error about the upstream branch not matching my current branch. So I went ahead and pushed the code using ``git push origin HEAD:master`` and found the following [solution to switching the master branch to main](https://stevenmortimer.com/5-steps-to-change-github-default-branch-from-master-to-main/).

```bash
# Step 1 
# create main branch locally, taking the history from master
git branch -m master main

# Step 2 
# push the new local main branch to the remote repo (GitHub) 
git push -u origin main

# Step 3
# switch the current HEAD to the main branch
git symbolic-ref refs/remotes/origin/HEAD refs/remotes/origin/main

# Step 4
# change the default branch on GitHub to main
# https://docs.github.com/en/github/administering-a-repository/setting-the-default-branch

# Step 5
# delete the master branch on the remote
git push origin --delete master
```

## Development Documentation

**Prerequisites:** [Install Node.js on Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl)

Setting up project from scratch, follow these commands inside repo directory:

```bash
npm init
touch server.js # initialized entry point default is 'index.js'
echo 'node_modules' > .gitignore
npm install express --save
npm install nodemon --save-dev # developer dependency
```

Modify package.json:
```json
"scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
```

If cloning this repository:

```bash
npm install 
```

Adding images to README.md:
- Create .github/images directories inside repo
```bash
mkdir .github && mkdir .github/images
```
- Save your images inside the directory
- Add html img tag pointing to the source inside README.md
```md
![screenshot](https://raw.githubusercontent.com/menuscreen/digital-security-privacy-tips-api/main/.github/images/screenshot.png)
```

### Bash Commands

> :warning: **Warning:** Never run a command if you don't understand it.

It's a good idea to never run a command if you don't know what it does. If you are new to linux, the manual pages (manpages) is a great resource for learning about some command line utility or program.

Example Usage:
```bash
man ls 
```

Sometimes it can be overwhelming to learn how to navigate the manpages when you're first starting out. I found a resource that can help at [explainshell.com](https://explainshell.com/). You can copy and paste an entire command and the site will try to break it down for you.

- ``npm init`` -> Initializes the current directory as an npm package, interactively creating package.json, you can follow the prompts using default values or blanks since you can edit the .json file later if needed.

### Resources

- [Windows Subsystem for Linux Documentation](https://docs.microsoft.com/en-us/windows/wsl/)

- [VS Code Remote Development Extension Pack](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)

- [Node.js and Express](https://fullstackopen.com/en/part3/node_js_and_express)

- [Understanding And Using REST APIs](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/)