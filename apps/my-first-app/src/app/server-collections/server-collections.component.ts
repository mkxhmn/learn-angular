import { Component } from '@angular/core';

@Component({
  selector: 'app-server-collections',
  templateUrl: './server-collections.component.html',
})
export class ServerCollectionsComponent {
  allowNewServer = false;

  constructor(){
    setTimeout(()=> {
      this.allowNewServer = true
    }, 2000)
  }
}
