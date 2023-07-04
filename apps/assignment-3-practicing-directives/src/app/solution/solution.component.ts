import { Component } from '@angular/core';

const LIMIT = 5;

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styles: [
    `
      .highlight {
        color: white;
      }
    `,
  ],
})
export class SolutionComponent {
  isShow = false;
  logs: number[] = [];
  isSurpassLimit = false;

  getBackgroundColor() {
    return this.isSurpassLimit ? 'blue' : '';
  }

  onToggle() {
    this.isShow = !this.isShow;
    this.logs.push(new Date().getTime());

    if (this.logs.length >= LIMIT && !this.isSurpassLimit) {
      this.isSurpassLimit = true;
    }
  }
}
