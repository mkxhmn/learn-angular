import { Component, EventEmitter, Output } from '@angular/core';

export type DataProps = {
  hello: string;
};

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent {
  @Output() onUpdateData = new EventEmitter<DataProps>();

  onPopulate(input: HTMLInputElement) {
    this.onUpdateData.emit({ hello: input.value });
  }
}
