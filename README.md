# Key Mirror Prefix

Key Mirror Prefix is a utility for creating an object with values equal to its keys, prefixed with a specified string. This tool is especially useful for differentiating similar action types in Redux-based projects.

- [Motivation](#motivation)
- [Example](#example)
- [Usage](#usage)

## Motivation

While working on numerous projects that use React Redux, I found [`keyMirror`](https://github.com/STRML/keyMirror) to be a handy tool for defining Action Types. However, as the action names often become quite similar, it becomes challenging to differentiate them in the console.

Key Mirror Prefix addresses this issue by allowing a prefix to be added to a group of action types. This makes it easier to identify the source of actions when logged to the console.

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

First, install the package as a dependency:

```bash
# Using yarn
yarn add keymirrorprefix

# Using npm
npm install keymirrorprefix
```

Then, you can import `keyMirrorPrefix` and use it to create an object with keys mirrored as values, prefixed with a specified string:

```js
import keyMirrorPrefix from 'keymirrorprefix'

const COLOURS = keyMirrorPrefix('COLOURS', {
  blue: null,
  red: null,
})

console.log(COLOURS.blue) // Outputs: COLOURS_blue
```
