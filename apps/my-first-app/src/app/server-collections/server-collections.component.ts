import { Component } from '@angular/core';

@Component({
  selector: 'app-server-collections',
  templateUrl: './server-collections.component.html',
})
export class ServerCollectionsComponent {
  isAllowNewServer = false;

  isCreatedNewServer = false;
  status = 'offline';

  constructor() {
    setTimeout(() => {
      this.isAllowNewServer = true;
    }, 2000);
  }

  private setServerStatus(isCreated = false) {
    return isCreated ? 'online' : 'offline';
  }

  onCreateServer() {
    this.isCreatedNewServer = !this.isCreatedNewServer;
    this.status = this.setServerStatus(this.isCreatedNewServer);
  }
}
