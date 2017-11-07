import { Pipe, PipeTransform } from '@angular/core';
import { Unescape } from '../unescape';

@Pipe({
  name: 'unescape'
})
export class UnescapePipe implements PipeTransform {

  constructor(private unescape: Unescape) {}
  
  /**
 * Pipe method to HTML unescape. Use method it(string, string|number, object) instead.
 * @param {string} value
 * @param {number | string} arg 
 * @return {string} 
 */
  transform(value: any, arg?: number | string): string {
    if (value === null || value === undefined) {
      throw `The input value to the pipe must be a string or a string convertible value like number, booleans, etc.`;
    }

    return this.unescape.it(value.toString(), arg);
  }

}
