import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-wonderful-hello',
  templateUrl: './wonderful-hello.component.html',
})
export class WonderfulHelloComponent {
  private defaultClasses = 'bg-danger text-capitalize ';

  @Input()
  set class(values: string) {
    this.classList = this.defaultClasses + values;
  }

  @HostBinding('class') classList = '';
}
