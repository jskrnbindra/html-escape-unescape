import * as _h from 'he';

export class Unescape {

    constructor() {
    }

    /**
    * Unescapes a string of escaped html values.
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
           return this.unescapeString(value);
        }
        if (typeof arg == 'number') {
            return this.uptoLevel(value, arg);
        }
        if (typeof arg == 'boolean') {
           return arg === true ? this.inDeepMode(value) : this.unescapeString(value);
        }

        throw 'Invalid parameter supplied to the pipe.';
    }

    /**
    * Unescapes HTML entities from a string.
    * @param {string} rawInput 
    * @return {string} 
    */
    unescapeString(rawInput: string): string {
    
        return _h.unescape(rawInput);
    }

    /**
    * Performs HTML unescaping, levels number of times.
    * @param {string} rawInput 
    * @param {boolean | number} levels 
    * @return {string} 
    */
    uptoLevel(rawInput: string, levels: number ): string {
        let unescapedString = rawInput;
        while(levels--) {
            unescapedString = this.unescapeString(unescapedString);
        }

        return unescapedString;
    }

    /**
    * Performs HTML unescaping untill the string is fully Unescaped.
    * @param {string} value 
    * @return {string} 
    */
    inDeepMode(rawInput: string): string {
        let unescaped: string = _h.unescape(rawInput);

        while (unescaped.length !== rawInput.length) {
            rawInput = unescaped;
            unescaped = _h.unescape(rawInput);
        }

        return unescaped;
    }

}