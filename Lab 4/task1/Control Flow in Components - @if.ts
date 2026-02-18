import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
  @if (isServerRunning){ 
  <span>Yes, the server is running</span> 
  } @else {
  <p>No, the server is not running</p>
  }
  `,
})
export class App {
    isServerRunning: boolean = false;
}
