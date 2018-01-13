# html-escape-unescape
[![Build Status](https://travis-ci.org/jskrnbindra/html-escape-unescape.svg?branch=master)](https://travis-ci.org/jskrnbindra/html-escape-unescape)

A lightweight library to meet all your HTML encoding/decoding needs, in Angular, using the power of pipes. 🎯
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
Using html-escape-unescape is as easy as piping your value to the appropriate pipe in your.component.html. 
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
Sometimes you need to escape a string multiple times. Consider the following case:
```typescript
let str = "&amp;lt;strong&amp;gt;Yo&amp;lt;/strong&amp;gt;";
```
Here ```str``` is a doubly HTML encoded string. So, to decode it, you need to unescape it twice.

The string ```str``` when HTML decoded once, using the ```unescape pipe``` gives ```&lt;strong&gt;Yo&lt;/strong&gt;```

Passing the result through the unescape pipe again, would result in: ```<strong>Yo</strong>```

#### You can do it in a better way 
To unescape a string ```N``` times, just pass in a number as a parameter.
Where ```N``` is the number of times you want the pipe to be chained.
```html
{{ someStringToBeUnescapedNtimes | unescape:N }}
```
And the same goes for escaping
```html
{{ someStringToBeEscapedNtimes | escape:N }}
```
### What if you don't know how many times a string has been encoded?🧐
It is, often, difficult to determine how many times a string was HTML encoded, or there can be inputs which are encoded for non-deterministic/variable number of times.
#### Ask the pipe to be recursive 😎
Use the 'recursive' parameter with the ```unescape pipe``` and let it do the rest.
For any string which was encoded unknown number of times, the ```recursive``` parameter to the unescape pipe will unescape the text untill it is fully unescaped to readable HTML text.
```html
{{ someStringToBeUnescaped?times | unescape:'recursive' }}
```

### Upcoming 🏁
A stand alone npm package which can be used in any Javascript runtime. Therefore it would be usable in Angular, React, NodeJS, etc.


## Troubleshooting

Please follow these guidelines when reporting bugs and feature requests:

1. Use [GitHub Issues](https://github.com/jskrnbindra/html-escape-unescape/issues) board to report bugs and feature requests (not our email address)
2. Please **always** write steps to reproduce the error. That way we can focus on fixing the bug, not scratching our heads trying to reproduce it.

Thanks for understanding!

### License

The MIT License (see the [LICENSE](https://github.com/jskrnbindra/html-escape-unescape/blob/master/LICENSE) file for the full text)
