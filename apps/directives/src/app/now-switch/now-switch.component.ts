import { Component } from '@angular/core';

@Component({
  selector: 'app-now-switch',
  templateUrl: './now-switch.component.html',
})
export class NowSwitchComponent {
  value = 0;

  /**
   * Increments the value by 1.
   * If the current value is greater or equal to 5, the value is set to 0.
   * Otherwise, the value is increment by 1.
   */
  increment() {
    if (this.value >= 5) {
      this.value = 0;
    } else {
      this.value++;
    }
  }

  /**
   * Decrements the value by 1.
   * If the current value is less than or equal to 0, the value is set to 5.
   * Otherwise, the value is decremented by 1.
   */
  decrement() {
    if (this.value <= 0) {
      this.value = 5;
    } else {
      this.value--;
    }
  }
}
