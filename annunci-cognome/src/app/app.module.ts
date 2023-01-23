import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnnunciComponent } from './annunci/annunci.component';
import { CommentiComponent } from './commenti/commenti.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnunciComponent,
    CommentiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
