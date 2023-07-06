import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent {
  isShow = false;
  @Input('options') options: { href: string; label: string }[] = [];
  @Input('label') label = '';

  onHandleShow() {
    this.isShow = !this.isShow;
  }
}
