import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Escape } from './pipes/escape.pipe';
import { Unescape } from './pipes/unescape.pipe';

const pipes = [
  Escape,
  Unescape
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ ...pipes ],
  exports: [...pipes]
})
export class HTMLEscapeUnescapeModule { }
