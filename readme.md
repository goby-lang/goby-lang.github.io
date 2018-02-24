# Document site for Goby

**This site is powered by [docusaurus](https://docusaurus.io/)**

## Prerequisite

- `yarn`

## Development

1. `cd website`
2. `yarn start`

## About Branch and Publishing

### Branch

Our default source branch is `source` instead of `master`. `master` branch is where
we put the build results (this is how GitHub page works).

So every site development or documentation should base on `source` branch.

### Publish the Site

To publish the site, run the following command:

```
$ cd website
$ GIT_USER=<GH_USERNAME> CURRENT_BRANCH=source USE_SSH=true yarn run publish-gh-pages
```

The `GH_USERNAME` should be your github username which should have the permission to push
changes to this repo.

And note that publishing the site has nothing to do with if the changes are committed
or pushed. So please make sure you know what your doing before running the above commands.

