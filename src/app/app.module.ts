import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button'
import { MatTableModule } from '@angular/material/table'


import { AppComponent } from './app.component';
import { SspgeoinfoComponent } from './sspgeoinfo/sspgeoinfo.component';
import { GeoInfoService } from './services/geoinfoservice'

@NgModule({
  declarations: [
    AppComponent,
    SspgeoinfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    MatButtonModule,
    MatTableModule,
    RouterModule.forRoot([
      { path: '', component: SspgeoinfoComponent },
    ])
  ],
  providers: [GeoInfoService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
