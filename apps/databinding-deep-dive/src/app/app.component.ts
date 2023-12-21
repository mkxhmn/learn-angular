import { Component } from '@angular/core';
import { ServerProps } from './server-element/server-element.component';
import { CreateProps } from './cockpit/cockpit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  servers: ServerProps[] = [
    {
      type: 'server',
      name: 'first server',
      content: 'hello world',
    },
  ];

  onCreatingServer(server: CreateProps) {
    this.servers.push({
      name: server.name,
      content: server.content,
      type: 'server',
    });
  }

  onCreatingBlueprint(blueprint: CreateProps) {
    this.servers.push({
      name: blueprint.name,
      content: blueprint.content,
      type: 'blueprint',
    });
  }
}
