## How old is it

---

A tool for recruiters to check how old a technology is.
Welcome to this non-exhaustive list of technologies and their approximate ages. I put it together as a slight dig at recruiters who expect you to have known a two year old language for five years.

View the page [HowOldisIt](https://howoldisit.glitch.me/)

### Installing

installing node modules

```javascript
npm install

```
or

```javascript
yarn 
```

Starting the Application locally

```javascript
npm start
```

or

```javascript
yarn start
```


### Workflow

This section describes the workflow we are going to follow when working on a new feature or fixing a bug . If you want to contribute, please follow these steps:

1) Fork this project.
2) Clone the forked project to your local environment, for example: `git clone https://github.com/nero2009/howoldisit.git`
3) Add the original project as a remote, for this example the name is `upstream`, you can use any name you want. `git remote add upstream https://github.com/jsrn/howoldisit.git`


#### Updating your local

In order to update your local environment to the latest version on master, you will have to pull the changes using the upstream repository, for example: `git pull upstream master`. This will pull all the new commits from the origin repository to your local environment.

#### Updating your local branch

Maybe you have been working on a feature or fix that took so time to finish, most likely there are new changes in the `master ` and your local repository is behind. In order to update it to the latest you need to pull the latest changes to develop and then rebase your current branch.

```javascript
$ git pull upstream master
$ git rebase upstream/master
```

From here you can push to your `origin` repository and create a pull request.

#### Add a new language

If you would like to add a language, add it to the array in `src/technologies.js`.

#### Pull Requests
If you want to work on an [Issue](https://github.com/jsrn/howoldisit/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc) please read the [Contributing](CONTRIBUTING.md) doc first.
All contributions are welcome, no matter how obscure the technology!

#### Technology used to create this Application
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

___A big thanks to [all of the contributors](https://github.com/jsrn/howoldisit/graphs/contributors) for massively expanding this beyond the tiny handful of technologies I had listed to begin with.___


P.S. If you are a recruiter and you are reading this, obviously it is not *you* that we are poking fun at! Haha! Ha! Haa... please don't blacklist us from the industry.
