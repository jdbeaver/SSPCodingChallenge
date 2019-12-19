import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SspgeoinfoComponent } from './sspgeoinfo/sspgeoinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    SspgeoinfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
