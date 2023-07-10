import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-local-dangerously',
  templateUrl: './local-dangerously.component.html',
  styleUrls: ['./local-dangerously.component.css'],
})
export class LocalDangerouslyComponent {
  isLivingDangerously = false;
  @ViewChild('dangerous', { static: true }) dangerous!: ElementRef; // '!' tells TS that it will be assigned a value before it is accessed

  onDangerous() {
    console.log(this.dangerous);
    this.isLivingDangerously = true;
    this.dangerous.nativeElement.innerHTML = 'dangerously set';
  }
}
