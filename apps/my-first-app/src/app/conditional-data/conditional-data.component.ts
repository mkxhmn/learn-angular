import { Component } from '@angular/core';

@Component({
  selector: 'app-conditional-data',
  templateUrl: './conditional-data.component.html',
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
