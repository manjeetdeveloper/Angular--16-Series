import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { SwitchcaseComponent } from './switchcase/switchcase.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { PropertyBComponent } from './property-b/property-b.component';
import { TwowayBComponent } from './twoway-b/twoway-b.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    NgforComponent,
    SwitchcaseComponent,
    NgclassComponent,
    PropertyBComponent,
    TwowayBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
