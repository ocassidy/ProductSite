import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div><h1>{{pageTitle}}</h1><pl-product></pl-product></div>`
})

export class AppComponent {
  pageTitle: 'Product Management';
}
