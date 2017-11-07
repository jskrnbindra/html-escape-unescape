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
           return this.escapeString(value);
        }
        if (typeof arg == 'number') {
            return this.uptoLevel(value, arg);
        }
        if (typeof arg == 'boolean') {
        //   return arg === true ? this.inDeepMode(value) : this.escapeString(value);
        throw 'No :deep on Escape.';
        
        }

        throw 'Invalid parameter supplied to the pipe.';
    }

    /**
    * Escapes HTML entities from a string.
    * @param {string} rawInput 
    * @return {string} 
    */
    escapeString(rawInput: string): string {
    
        return _h.escape(rawInput);
    }

    /**
    * Performs HTML escaping, levels number of times.
    * @param {string} rawInput 
    * @param {boolean | number} levels 
    * @return {string} 
    */
    uptoLevel(rawInput: string, levels: number ): string {
        let escapedString = rawInput;
        while(levels--) {
            escapedString = this.escapeString(escapedString);
        }

        return escapedString;
    }

}