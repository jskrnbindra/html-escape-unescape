import { Pipe, PipeTransform } from '@angular/core';
import * as _h from 'he';

@Pipe({
  name: 'unescape'
})
export class Unescape implements PipeTransform {

  transform(value: any, args?: any): any {

    return _h.unescape(value);
  }
}
