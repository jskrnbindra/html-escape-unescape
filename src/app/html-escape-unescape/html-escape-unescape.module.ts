import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EscapePipe } from './pipes/escape.pipe';
import { UnescapePipe } from './pipes/unescape.pipe';
import { Escape } from './escape';
import { Unescape } from './unescape';

const pipes = [
  EscapePipe,
  UnescapePipe
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ ...pipes ],
  exports: [...pipes],
  providers: [Escape, Unescape]
})
export class HTMLEscapeUnescapeModule {}
