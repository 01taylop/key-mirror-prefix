# 🔑 Key Mirror Prefix

[![CodeQL Analysis](https://github.com/01taylop/key-mirror-prefix/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/01taylop/key-mirror-prefix/actions/workflows/codeql-analysis.yml)
[![Test](https://github.com/01taylop/key-mirror-prefix/actions/workflows/test.yml/badge.svg)](https://github.com/01taylop/key-mirror-prefix/actions/workflows/test.yml)

![Node Versions Supported](https://img.shields.io/static/v1?label=node&message=>=18.18.0&color=blue)

A utility for creating an object with values equal to its keys, prefixed with a specified string. Ideal for Redux action types, analytics events, error codes, and other constants that need unique identifiers across modules.

- [Motivation](#motivation)
- [Example](#example)
- [Usage](#usage)
  - [Installation](#installation)
  - [Importing](#importing)
  - [Example Usage](#example-usage)

## Motivation

While working on numerous projects that use React Redux, I found [`keyMirror`](https://github.com/STRML/keyMirror) to be a handy tool for defining Action Types. However, as the action names often become quite similar, it becomes challenging to differentiate them in the console and ensure their uniqueness across the application.

Key Mirror Prefix addresses this issue by allowing a prefix to be added to a group of action types. This not only makes it easier to identify the source of actions when logged to the console, but also facilitates the uniqueness of action names, a crucial requirement in Redux-based projects.

## Example

Consider the following action types for searching cities and countries:

```js
export const CITIES = keyMirrorPrefix('CITIES', {
  SEARCH_REQUEST: null,
  SEARCH_SUCCESS: null,
  SEARCH_FAILURE: null,
})

export const COUNTRIES = keyMirrorPrefix('COUNTRIES', {
  SEARCH_REQUEST: null,
  SEARCH_SUCCESS: null,
  SEARCH_FAILURE: null,
})
```

With Key Mirror Prefix, the logged actions would look like this:

```js
| prev state  { ... }
| action      {type: "CITIES_SEARCH_SUCCESS"}
| next state  { ... }

| prev state  { ... }
| action      {type: "COUNTRIES_SEARCH_SUCCESS"}
| next state  { ... }
```

This makes it clear whether the `SEARCH_SUCCESS` action came from `CITIES` or `COUNTRIES`.

## Usage

### Installation

First, install the package as a dependency:

```bash
# Using yarn
yarn add keymirrorprefix

# Using npm
npm install keymirrorprefix
```

### Importing

You can import `keyMirrorPrefix` using either CommonJS or ES Modules:

For CommonJS:

```js
const { keyMirrorPrefix } = require('keymirrorprefix')
```

For ES Modules:

```js
import { keyMirrorPrefix } from 'keymirrorprefix'
```

The `keyMirrorPrefix` function is exported both as a default and named export, so you can import it either way.

### Example Usage

Once you've imported `keyMirrorPrefix`, you can use it to create an object with keys mirrored as values, prefixed with a specified string:

```js
const COLOURS = keyMirrorPrefix('COLOURS', {
  blue: null,
  red: null,
})

console.log(COLOURS.blue) // "COLOURS_blue"
```

If you do not need a prefix, you can either pass `null` as the first argument to `keyMirrorPrefix`, or you can import and use `keyMirror`:

```js
import { keyMirror, keyMirrorPrefix } from 'keymirrorprefix'

const COLOURS = keyMirrorPrefix(null, {
  blue: null,
  red: null,
})

const SHAPES = keyMirror({
  square: null,
  triangle: null,
})

console.log(COLOURS.blue) // "blue"
console.log(SHAPES.square) // "square"
```
