import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
})
export class DataBindingComponent {
  data = 'ʕっ•ᴥ•ʔっ';

  onUpdateData(event: Event) {
    this.data = (<HTMLInputElement>event.target).value;
  }
}
