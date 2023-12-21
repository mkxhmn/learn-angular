import { Component, EventEmitter, Output } from '@angular/core';

export type FeatureProps = 'recipe' | 'shopping-list';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output('feature') feature = new EventEmitter<FeatureProps>();

  onSelect(selection: FeatureProps) {
    this.feature.emit(selection);
  }
}
