import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Escape } from './escape';
import { Unescape } from './unescape';
import { EscapePipe, UnescapePipe } from './pipes'

const pipes = [
  EscapePipe,
  UnescapePipe
]

const services = [
  Escape,
  Unescape
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ ...pipes ],
  exports: [...pipes, ...services],
  providers: [...services]
})
export class HTMLEscapeUnescapeModule {}
