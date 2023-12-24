import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
} from '@angular/common';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight.directive';
import { WonderfulHelloComponent } from './wonderful-hello/wonderful-hello.component';
import { UnlessDirective } from './unless.directive';
import { NowSwitchComponent } from './now-switch/now-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    WonderfulHelloComponent,
    UnlessDirective,
    NowSwitchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgForOf,
    NgIf,
    NgStyle,
    NgClass,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
