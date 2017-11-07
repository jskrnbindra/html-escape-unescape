import { Pipe, PipeTransform } from '@angular/core';
import { Unescape } from '../unescape';

@Pipe({
  name: 'unescape'
})
export class UnescapePipe implements PipeTransform {

  constructor(private unescape: Unescape) {}
  
  /**
 * Pipe method to HTML unescape. Use method it(string, object) instead.
 * @param {string} value
 * @param {object} Options 
 * @return {string} 
 */
  transform(value: any, arg?: number | boolean): string {
    if (value === null || value === undefined) {
      throw `The input value to the pipe must be a string or a string convertible value like number, booleans, etc.`;
    }

    return this.unescape.it(value.toString(), arg);
  }

}
