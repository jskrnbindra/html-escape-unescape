import { Pipe, PipeTransform } from '@angular/core';
import * as _h from 'he';

@Pipe({
  name: 'escape'
})
export class Escape implements PipeTransform {

  /**
 * BLUE BLUE BLUE
 * @param {string} locale
 * @return {string} HTML escaped value
 */
  it(value: string): string {
    
    return this.transform(value);
  }

  transform(value: any, args?: any): any {

    return _h.escape(value);
  }

}
