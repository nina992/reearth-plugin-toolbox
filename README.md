# reearth-plugin-toolbox
## Overview

This is a reearth plugin project, structure refrenced https://github.com/eukarya-inc/reearth-plateauview.

Main content is on branch `starter`.

Every plugin has its on branch base on `starter`.

## How To Use

- Clone the `starter` branch.
- Made a new branch base on `starter`.
- Run `yarn`.
- Run `yarn createwidget yournewpluginid`.
- Config `package.json` to run your new plugin (This step may not needed in the future).

## Plugin list

| Plugin      | Repo        |
| ----------- | ----------- |
| Tag Cloud   | [Link](https://github.com/airslice/reearth-plugin-tag-cloud)  |
| Tag Filter  | [Link](https://github.com/airslice/reearth-plugin-tag-filter) |
| Distance Measurement | [Link](https://github.com/airslice/reearth-plugin-distance-measurement) |

## Known issue

- Sometimes on published (and preview) page marker renders without an update.
- Build with cdn import is disabled now.
- Multiple instance of tag cloud / tag filter may not working well with each other.
- Mobile UI is not supported for now.
