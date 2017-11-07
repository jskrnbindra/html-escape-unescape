import * as _h from 'he';
import { BAD_REQUEST_ERR_MSG, DEEP_ARG } from './config';

export class Unescape {

    optionsObject: any = null;
    
    constructor() {
    }

    /**
    * Unescapes a string of escaped html values.
    * @param {string} value 
    * @param {boolean | number} arg 
    * @return {string} 
    */
    it(value: any, arg?: string | number, options?: any) {
        if (value === null || value === undefined) {
            throw BAD_REQUEST_ERR_MSG;
        }
        if (options !== undefined && typeof options !== 'object') {
            throw BAD_REQUEST_ERR_MSG;
        }
        value = value.toString();

        if (arg === undefined || arg === null) {
           return this.unescapeString(value);
        }
        if (typeof arg == 'number') {
            return this.uptoLevel(value, arg);
        }
        if (typeof arg == 'string') {
            if (arg !== DEEP_ARG) {
                throw BAD_REQUEST_ERR_MSG;
            }
            
            return this.inDeepMode(value);
        }
        if (typeof options ==  'object' || (typeof arg == 'object' && typeof options === 'undefined')) {
            this.optionsObject = options || arg;

            return this.unescapeString(value);
        }

        throw BAD_REQUEST_ERR_MSG;
    }

    /**
    * Unescapes HTML entities from a string.
    * @param {string} rawInput 
    * @return {string} 
    */
    unescapeString(rawInput: string): string {
    
        return this.optionsObject !== undefined && this.optionsObject !== null ? _h.unescape(rawInput, this.optionsObject) : _h.unescape(rawInput);
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