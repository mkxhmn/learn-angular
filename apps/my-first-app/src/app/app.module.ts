import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { ServerComponent } from './server/server.component';
import { ServerCollectionsComponent } from './server-collections/server-collections.component';

@NgModule({
  declarations: [AppComponent, TitleComponent, ServerComponent, ServerCollectionsComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
