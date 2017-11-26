# html-escape-unescape
Fast, sophisticated HTML encoding decoding.

### Installation
Install using npm
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
{{ someStringToBeUnescapedXtimes | unescape:'recursive' }}
```
## Troubleshooting

Please follow this guidelines when reporting bugs and feature requests:

1. Use [GitHub Issues](https://github.com/valor-software/ng2-charts/issues) board to report bugs and feature requests (not our email address)
2. Please **always** write steps to reproduce the error. That way we can focus on fixing the bug, not scratching our heads trying to reproduce it.

Thanks for understanding!

### License

The MIT License (see the [LICENSE](https://github.com/valor-software/ng2-charts/blob/master/LICENSE) file for the full text)