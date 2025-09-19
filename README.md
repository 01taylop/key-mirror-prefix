# 🔑 Key Mirror Prefix

[![CodeQL Analysis](https://github.com/01taylop/key-mirror-prefix/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/01taylop/key-mirror-prefix/actions/workflows/codeql-analysis.yml)
[![Test](https://github.com/01taylop/key-mirror-prefix/actions/workflows/test.yml/badge.svg)](https://github.com/01taylop/key-mirror-prefix/actions/workflows/test.yml)

![Node Versions Supported](https://img.shields.io/static/v1?label=node&message=>=18.18.0&color=blue)

A utility for creating an object with values equal to its keys, prefixed with a specified string. Ideal for Redux action types, analytics events, error codes, and other constants that need unique identifiers across modules.

- [Motivation](#motivation)
- [Example](#example)
  - [The Problem](#the-problem)
  - [The Solution](#the-solution)
- [Usage](#usage)
  - [Installation](#installation)
  - [Importing](#importing)
  - [Basic Usage](#basic-usage)
  - [Usage Without Prefix](#usage-without-prefix)

## Motivation

When building large or complex applications, managing constants like action types, event names, or error codes becomes repetitive and error-prone. Without prefixing, you either risk naming collisions across different areas of your app, or you manually add prefixes everywhere - leading to verbose, inconsistent code.

Key Mirror Prefix solves this by automatically prefixing groups of constants, ensuring uniqueness while keeping your code clean and maintainable. Whether you're building Redux actions, analytics events, or any other grouped constants, you get organised, collision-free identifiers with minimal effort.

## Example

### The Problem

**Single object** - verbose and error-prone:

```js
import keyMirror from 'key-mirror'

export const REDUX_ACTIONS = keyMirror({
  CITIES_SEARCH_REQUEST: null,
  CITIES_SEARCH_SUCCESS: null,
  CITIES_SEARCH_FAILURE: null,
  COUNTRIES_SEARCH_REQUEST: null,
  COUNTRIES_SEARCH_SUCCESS: null,
  COUNTRIES_SEARCH_FAILURE: null,
})

console.log(REDUX_ACTIONS.CITIES_SEARCH_REQUEST) // "CITIES_SEARCH_REQUEST"
console.log(REDUX_ACTIONS.COUNTRIES_SEARCH_REQUEST) // "COUNTRIES_SEARCH_REQUEST"
```

**Multiple objects** - collision risk:

```js
import keyMirror from 'key-mirror'

export const CITIES = keyMirror({
  SEARCH_REQUEST: null,
  SEARCH_SUCCESS: null,
  SEARCH_FAILURE: null,
})

export const COUNTRIES = keyMirror({
  SEARCH_REQUEST: null,
  SEARCH_SUCCESS: null,
  SEARCH_FAILURE: null,
})

console.log(CITIES.SEARCH_REQUEST) // "SEARCH_REQUEST"
console.log(COUNTRIES.SEARCH_REQUEST) // "SEARCH_REQUEST"
```

### The Solution

**Using Key Mirror Prefix** - clean and collision-free:

```js
import { keyMirrorPrefix } from 'keymirrorprefix'

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

console.log(CITIES.SEARCH_REQUEST) // "CITIES_SEARCH_REQUEST"
console.log(COUNTRIES.SEARCH_REQUEST) // "COUNTRIES_SEARCH_REQUEST"
```

## Usage

### Installation

Install the package as a dependency:

```bash
# Using npm
npm install keymirrorprefix

# Using yarn
yarn add keymirrorprefix
```

### Importing

You can import `keyMirrorPrefix` using either CommonJS or ES Modules:

```js
// Using CommonJS
const { keyMirrorPrefix } = require('keymirrorprefix')

// Using ES Modules
import { keyMirrorPrefix } from 'keymirrorprefix'
```

The `keyMirrorPrefix` function is exported both as a default and named export, so you can import it either way.

### Basic Usage

Once you've imported `keyMirrorPrefix`, you can use it to create an object with keys mirrored as values, prefixed with a specified string:

```js
const NAVIGATION = keyMirrorPrefix('NAVIGATION', {
  CLICK: null,
  CLOSE: null,
  OPEN: null,
})

const PANEL = keyMirrorPrefix('PANEL', {
  CLOSE: null,
  OPEN: null,
})

console.log(NAVIGATION.OPEN) // "NAVIGATION_OPEN"
console.log(PANEL.OPEN) // "PANEL_OPEN"
```

### Usage Without Prefix

If you do not need a prefix, you can either pass `null` as the first argument to `keyMirrorPrefix`, or you can import and use `keyMirror`:

```js
import { keyMirror, keyMirrorPrefix } from 'keymirrorprefix'

const ANALYTICS = keyMirrorPrefix(null, {
  SEARCH: null,
  SIGN_OUT: null,
})

const EVENTS = keyMirror({
  BLUR: null,
  FOCUS: null,
})

console.log(ANALYTICS.SEARCH) // "SEARCH"
console.log(EVENTS.BLUR) // "BLUR"
```
