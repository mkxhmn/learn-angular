import { Component } from '@angular/core';
import { DataProps } from './hello/hello.component';

@Component({
  selector: 'app-local-references',
  templateUrl: './local-references.component.html',
  styleUrls: ['./local-references.component.css'],
})
export class LocalReferencesComponent {
  parental = "I'm fine, thank you";

  onUpdateParental(event: DataProps) {
    this.parental = event.hello;
  }
}
