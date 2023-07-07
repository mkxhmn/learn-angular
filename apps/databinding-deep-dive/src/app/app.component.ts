import { Component } from '@angular/core';

type ServersProps = {
  type: string;
  name: string;
  content: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  servers: ServersProps[] = [];

  newServerName = '';
  newServerContent = '';
}
