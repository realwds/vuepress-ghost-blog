---
title: GitHub Action持续集成
image: https://cdn.jsdelivr.net/gh/realwds/cdn/img/20201216165804.jpg
publish: 2020-03-12
type: post
tags:
  - 学习
categories:
  - 学习
readingTime: 3 Minutes
---
GitHub Action 自动部署到 GitHub & Gitee & GitLab

<!-- more -->

## GitHub Action 自动部署到 GitHub Page

``` yaml
name: DEPLOY CI
on:
  push:
    branches:
      - master
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@master

    - name: Build and Deploy
      uses: JamesIves/github-pages-deploy-action@master
      env:
        ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
        BRANCH: gh-pages
        FOLDER: docs/.vuepress/dist
        BUILD_SCRIPT: npm install && npm run build
```


## GitHub Action 自动部署到 Gitee & GitLab

``` yaml
name: MIRROR CI
on:
  push:
    branches:
      - master
jobs:
  mirror_to_gitee:
    runs-on: ubuntu-latest
    steps:
      - name: 'Checkout'
        uses: actions/checkout@v1
      - name: 'Mirror to gitee'
        uses: pixta-dev/repository-mirroring-action@v1
        with:
          target_repo_url:
            git@gitee.com:tsund/test.git
          ssh_private_key:
            ${{ secrets.GITEE_KEY }}

  mirror_to_gitlab:
    runs-on: ubuntu-latest
    steps:
      - name: 'Checkout'
        uses: actions/checkout@v1
      - name: 'Mirror to gitlab'
        uses: pixta-dev/repository-mirroring-action@v1
        with:
          target_repo_url:
            git@gitlab.com:tsund/test.git
          ssh_private_key:
            ${{ secrets.GITLAB_KEY }}
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTUzOTA0NTIxM119
-->