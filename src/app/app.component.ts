import { Component, OnInit } from '@angular/core';
import { Escape, Unescape  } from './html-escape-unescape';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Welcome to {{ title | unescape }} !!
    </h1>
  `,
  styles: [],
  providers: [Escape, Unescape]
})
export class AppComponent implements OnInit {
  title = `&amp;amp;lt;&amp;`;
  title1 = ``;
  opt = {decimal:true};

  constructor(
    private escape: Escape, 
    private unescape: Unescape
  ) {}

  ngOnInit() {
    console.log('This is an escape test', this.escape.it('<h1>yo</h1>'));
    console.log('This is an unescape test', this.unescape.it(this.escape.it(this.escape.it('<h1>yo</h1>'))));
  }
}
