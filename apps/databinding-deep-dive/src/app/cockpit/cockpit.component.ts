import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

export type CreateProps = {
  name: string;
  content: string;
};

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  ngOnInit(): void {
    console.log('hello CockpitComponent');
  }

  @Output() serverData = new EventEmitter<CreateProps>();
  @Output() blueprintData = new EventEmitter<CreateProps>();

  @ViewChild('serverNameInput') serverNameInput:
    | ElementRef<HTMLInputElement>
    | undefined;
  @ViewChild('serverContentInput')
  serverContentInput: ElementRef<HTMLInputElement> | undefined;

  name = '';
  content = '';

  onAddServer() {
    this.serverData.emit({
      name: this.name,
      content: this.content,
    });
  }

  onAddBlueprint() {
    this.blueprintData.emit({
      name: this.name,
      content: this.content,
    });
  }

  onServerAddition(type: 'server' | 'blueprint') {
    const data = {
      name: this.serverNameInput?.nativeElement?.value ?? '',
      content: this.serverContentInput?.nativeElement?.value ?? '',
    };

    if (type === 'server') {
      this.serverData.emit(data);
    } else {
      this.blueprintData.emit(data);
    }
  }
}
