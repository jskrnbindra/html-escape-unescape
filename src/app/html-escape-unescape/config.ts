export const BLACKLIST = [
    `<`,
    `>`,
    `&`,
    `'`,
    `"`,
    `\``,
    ` `,
    `!`,
    `@`,
    `$`,
    `%`, 
    `(`,
    `)`, 
    `=`, 
    `+`, 
    `{`, 
    `}`, 
    `[`, 
    `]`
];

export const HTMLSafe = {
    '<': ['&lt;', '&#60;', '&#x3C'],
    '>': ['&gt;', '&#62;', '&#x3E'],
    '&': ['&amp;', '&#38;', '&#x26'],
    '\'': ['&#39;', '&#x27'],
    '"': ['&quot;', '&#34;', '&#x22'],
    '`': ['&#96;', '&#x60'],
    ' ': ['&nbsp;', '&#32;', '&#x20'],
    '!': ['&#33;', '&#x21'],
    '@': ['&#64;', '&#x40'],
    '$': ['&#36;', '&#x24'],
    '%': ['&#37;', '&#x25'],
    '(': ['&#40;', '&#x28'],
    ')': ['&#41;', '&#x29'], 
    '=': ['&#61;', '&#x3D'], 
    '+': ['&#43;', '&#x2B'], 
    '{': ['&#123;', '&#x7B'], 
    '}': ['&#125;', '&#x7D'], 
    '[': ['&#91;', '&#x5B'], 
    ']': ['&#93;', '&#x5D'],
};

export const BAD_REQUEST_ERR_MSG = `Invalid parameter supplied to the pipe. Refer to the docs at https://www.npmjs.com/package/html-escape-unescape to see the correct usage.`;
export const DEEP_ARG = 'recursive';
export const DOCS_LINK = 'https://www.npmjs.com/package/html-escape-unescape';