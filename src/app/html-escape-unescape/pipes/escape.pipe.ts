import { Pipe, PipeTransform } from '@angular/core';
import { Escape } from '../escape'


@Pipe({
  name: 'escape'
})
export class EscapePipe implements PipeTransform {

  constructor(private escape: Escape) {}

  /**
 * Pipe method to HTML escape. Use method it(string, object) instead.
 * @param {string} value
 * @param {object} Options 
 * @return {string} HTML escaped value
 */
  transform(value: any, arg?: number | boolean): string {
 
    if (value === null || value === undefined) {
      throw `The input value to the pipe must be a string or a string convertible value like number, booleans, etc.`;
    }

    return this.escape.it(value.toString(), arg);
  }

}
