import * as _h from 'he';
import { BAD_REQUEST_ERR_MSG, DEEP_ARG, DOCS_LINK } from './config';

export class Escape {

    constructor() {
    }

    /**
    * Escapes HTML entities from a string.
    * @param {string} value 
    * @param {string | number} arg 
    * @param {any} options
    * @return {string} 
    */
    it(value: any, arg?: string | number) {
        if (value === null || value === undefined) {
            throw BAD_REQUEST_ERR_MSG;
        }
        value = value.toString();

        if (arg === undefined || arg === null) {
            return this.escapeString(value);
        }
        if (typeof arg == 'number') {
            return this.uptoLevel(value, arg);
        }
        if (typeof arg == 'string') {
            if (arg === DEEP_ARG){
                throw 'No :deep on Escape.';
            }
        }
        if (typeof arg ==  'object') {
            throw `No options for Escape. Refer to the docs at ${DOCS_LINK} to see the correct usage.`;
        }

        throw BAD_REQUEST_ERR_MSG;
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
    uptoLevel(rawInput: string, levels: number): string {
        let escapedString = rawInput;
        while (levels--) {
            escapedString = this.escapeString(escapedString);
        }

        return escapedString;
    }

}