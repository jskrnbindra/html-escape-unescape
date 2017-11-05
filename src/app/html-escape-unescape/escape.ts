import * as _h from 'he';

export class Escape {

    constructor() {
    }

    /**
    * Escapes HTML entities from a string.
    * @param {string} value 
    * @param {boolean | number} arg 
    * @return {string} 
    */
    it(value: any, arg?: boolean | number) {
        if (value === null || value === undefined) {
            throw `The input value to the pipe must be a string or a string convertible value like number, booleans, etc.`;
        }
        value = value.toString();

        if (arg === undefined || arg === null) {
           return this.htmlString(value);
        }
        if (typeof arg == 'number') {
            return this.uptoLevel(value, arg);
        }
        if (typeof arg == 'boolean') {
           return arg === true ? this.inDeepMode(value) : this.htmlString(value);
        }

        throw 'Invalid parameter supplied to the pipe.';
    }

    htmlString(rawInput: string): string {
    
        return _h.escape(rawInput);
    }

    uptoLevel(rawInput: string, levels: number ): string {
        let escapedString = rawInput;
        while(levels--) {
            escapedString = this.htmlString(escapedString);
        }

        return escapedString;
    }

    inDeepMode(rawInput: string): string {

        return 'yea';
    }

}