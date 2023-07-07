import { Component, Input } from '@angular/core';

export type ServerProps = {
  type: 'server' | 'blueprint';
  name: string;
  content: string;
};

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent {
  @Input('server') server: ServerProps = {
    type: 'server',
    name: '',
    content: '',
  };
}
