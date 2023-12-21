import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

export type ServerProps = {
  type: 'server' | 'blueprint';
  name: string;
  content: string;
};

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent implements OnInit {
  /**
   * Represents a server. This will expose the "server" to the world
   *
   * @typedef {Object} ServerProps
   * @property {string} type - The type of server.
   * @property {string} name - The name of the server.
   * @property {string} content - The content of the server.
   */
  @Input(
    /**
     * this is binding through alias,
     * this is useful when you want to assign some other name to the outside world
     */
    'server'
  )
  server: ServerProps = {
    type: 'server',
    name: '',
    content: '',
  };

  constructor() {
    console.log('constructor called');
  }

  ngOnInit() {
    console.log('ngOnInit called', this.server);

  }
}
