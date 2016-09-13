import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'prop-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.style.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  displayLayout = true;

  ngOnInit(){}

}