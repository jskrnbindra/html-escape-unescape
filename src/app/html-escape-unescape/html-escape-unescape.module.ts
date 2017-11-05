import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EscapePipe } from './pipes/escape.pipe';
import { Unescape } from './pipes/unescape.pipe';
import { Escape } from './escape';

const pipes = [
  EscapePipe,
  Unescape
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ ...pipes ],
  exports: [...pipes],
  providers: [Escape]
})
export class HTMLEscapeUnescapeModule {}
