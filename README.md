# html-escape-unescape
A lightweight library to meet all you HTML encoding/decoding needs, in Angular(not AngularJS), using the power of pipes. 🎯
### Installation

```bash
npm install -S html-escape-unescape
```
If you are using npm version v5.0.0 or above, you may omit the '-S' flag because npm now automatically updates your package.json and package-lock.json.
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
Using html-escape-unescape is as easy as piping your value to the appropriate pipe. 
```html
{{ someStringToBeEscaped | escape }}
```
```html
{{ someStringToBeUnescaped | unescape }}
```
Yay! it works. 🎉
This will do for most of the use cases.

## But that's not it, there's more

#### Escape/Unescape strings multiple times

Escape a string X times.
```html
{{ someStringToBeEscapedXtimes | escape:X }}
```

Unescape a string X times.
```html
{{ someStringToBeUnescapedXtimes | unescape:X }}
```
Unescape a string recursively 
```html
{{ someStringToBeUnescaped?times | unescape:'recursive' }}
```
