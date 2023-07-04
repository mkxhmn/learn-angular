import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { ServerComponent } from './server/server.component';
import { ServerCollectionsComponent } from './server-collections/server-collections.component';
import { CardComponent } from './card/card.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ConditionalDataComponent } from './conditional-data/conditional-data.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    ServerComponent,
    ServerCollectionsComponent,
    CardComponent,
    DataBindingComponent,
    ConditionalDataComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
