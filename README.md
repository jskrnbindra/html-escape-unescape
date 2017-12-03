# html-escape-unescape
[![Build Status](https://travis-ci.org/jskrnbindra/html-escape-unescape.svg?branch=master)](https://travis-ci.org/jskrnbindra/html-escape-unescape)
[![Coverage Status](https://coveralls.io/repos/github/jskrnbindra/html-escape-unescape/badge.svg)](https://coveralls.io/github/jskrnbindra/html-escape-unescape)
Fast, sophisticated HTML encoding decoding.

### Installation
```bash
npm install html-escape-unescape
```

### Usage
1. Import into your.module.ts
```typescript
import { HTMLEscapeUnescapeModule } from 'html-escape-unescape'

// and  add in your module's declarations array 
imports: [ 
    HTMLEscapeUnescapeModule 
    ]
```
2. Start using the pipes
##### Escape
Basic
```html
{{ someStringToBeEscaped | escape }}
```
Escape a string X times.
```html
{{ someStringToBeEscapedXtimes | escape:X }}
```
##### Unescape
Basic
```html
{{ someStringToBeUnescaped | unescape }}
```
Unescape a string X times.
```html
{{ someStringToBeUnescapedXtimes | unescape:X }}
```
Unescape a string recursively 
```html
{{ someStringToBeUnescaped?times | unescape:'recursive' }}
```
