import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgForOf, NgIf, NgStyle } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, NgForOf, NgIf, NgStyle],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
