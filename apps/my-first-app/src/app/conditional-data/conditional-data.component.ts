import { Component } from '@angular/core';

@Component({
  selector: 'app-conditional-data',
  templateUrl: './conditional-data.component.html',
})
export class ConditionalDataComponent {
  isRage = false;

  onToggle() {
    this.isRage = !this.isRage;
  }
}
