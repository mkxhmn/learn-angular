import { Component, EventEmitter, Output } from '@angular/core';

export type CreateProps = {
  name: string;
  content: string;
};

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent {
  @Output() serverData = new EventEmitter<CreateProps>();
  @Output() blueprintData = new EventEmitter<CreateProps>();

  name = '';
  content = '';

  onAddServer() {
    this.serverData.emit({
      name: this.name,
      content: this.content,
    });
  }

  onAddBlueprint() {
    this.blueprintData.emit({
      name: this.name,
      content: this.content,
    });
  }
}
