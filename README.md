
# Unlcokd ts

> Collection of functions to use as a client of unlockd

### Install package 
1. Creates token https://github.com/settings/tokens
2. Login, the GitHub token should has enabled
   2. [x] **write:packages** Upload packages to GitHub Package Registry
   3. [x] **read:packages** Download packages from GitHub Package Registry

```sh
npm login --scope=@unlockdfinance --registry=https://npm.pkg.github.com

Username: <your github user>
Password: <github token>
Email: <your github user>
```
3. Install it
```sh
npm i @unlockdfinance/unlockd-ts
```
Or

```sh
bun install @unlockdfinance/unlockd-ts
```

## Dev Prerequisites

This project requires NodeJS (version 8 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
6.4.1
v8.16.0
```

Also is high recommended use [bun](https://bun.sh/) 


## Installation

Start with cloning this repo on your local machine:

```sh
$ git clone https://github.com/UnlockdFinance/unlockd-ts
$ cd unlockd-ts
```

To install and set up the library, run:

```sh
$ npm install 
```

Or if you prefer using Bun:

```sh
$ bun install
```


## Publish 
1. Login, the GitHub token should has enabled , https://github.com/settings/tokens
   2. [x] **write:packages** Upload packages to GitHub Package Registry
   3. [x] **read:packages** Download packages from GitHub Package Registry
   
```sh
npm login --scope=@unlockdfinance --registry=https://npm.pkg.github.com

Username: <your github user>
Password: <github token>
Email: <your github user>
```
2. [Update the version](#versioning) on the package.json
3. Build the module 
```sh
npm run build
```
3. Publish
```sh
npm publish
```
4. Commit and push the changes 
```sh
git add . && git commit -m "Publish" && git push
```
## Install on production CI
### GitHub Actions: How to Install a Private NPM Package
In a CI environment, you'll also need npm login to similarly authenticate. Otherwise, npm install will fail, since it doesn't have access to the private NPM package. One way to pre-configure this is to use a .npmrc file; however, this commits auth credentials to the repo with that file. So, another way is to use the NPM tool npm-cli-login. There is a requirement that you either use your own personal access token (not optimal: you leave the repo, CI breaks), or set up a GitHub account specifically for CI and create an access token with that account.

Create an access token with a CI-only GitHub account or grab an access token from your own GitHub account.
Add that access token to your repo as a "secret", in the repo settings.
Update your GitHub Actions workflow script to run this step AFTER you install NPM and BEFORE you run npm install:
```yaml
- name: Login to GitHub private NPM registry
  env:
  CI_ACCESS_TOKEN: ${{ secrets.NAME_OF_YOUR_ACCESS_TOKEN_SECRET }}
  shell: bash
  run: |
  npm install -g npm-cli-login
  npm-cli-login -u "USERNAME" -p "${CI_ACCESS_TOKEN}" -e "EMAIL" -r "https://npm.pkg.github.com" -s "@SCOPE"
```
Replace NAME_OF_YOUR_ACCESS_TOKEN_SECRET, USERNAME, EMAIL and SCOPE.

For example
```yaml
- name: Login to GitHub private NPM registry
  env:
  CI_ACCESS_TOKEN: ${{ secrets.MY_TOKEN }}
  shell: bash
  run: |
  npm install -g npm-cli-login
  npm-cli-login -u "ci-github-account" -p "${CI_ACCESS_TOKEN}" -e "ci-github-account@example.com" -r "https://npm.pkg.github.com" -s "@unlockdfinance"
```

## Built With

* Typescript 
* Love

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/UnlockdFinance/unlockd-ts/pkgs/npm/unlockd-ts).

## Authors

* **Enric Borrallo** - *Initial work* - [eborrallo](https://github.com/eborrallo)
* **Alejandro Roige** - *All the other cool stuff* - [roigecode](https://github.com/roigecode)

See also the list of [contributors](https://github.com/UnlockdFinance/unlockd-ts/contributors) who participated in this project.

