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
}
