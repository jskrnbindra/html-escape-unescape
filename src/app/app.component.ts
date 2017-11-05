import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Welcome to {{ title1 | escape  }}!!
    </h1>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = '&lt;h1&gt;ap0&lt;/h1&gt;';
  title1 = '<h1>yo</h1>';

  ngOnInit() {
    
  }
}
