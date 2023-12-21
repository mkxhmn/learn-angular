import { Component } from '@angular/core';
import { FeatureProps } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loadedFeature: FeatureProps = 'recipe';

  onNavigate(feature: FeatureProps) {
    this.loadedFeature = feature;
  }
}
