import { Component } from '@angular/core';

@Component({
  selector: 'app-conditional-data',
  templateUrl: './conditional-data.component.html',
  styles: [
    `
      .online {
        background-color: red;
      }
    `,
  ],
})
export class ConditionalDataComponent {
  isPeaceful = true;

  onToggle() {
    this.isPeaceful = !this.isPeaceful;
  }

  getColor() {
    return this.isPeaceful ? 'blue' : 'red';
  }
}
