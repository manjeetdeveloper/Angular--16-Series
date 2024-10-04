import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { SwitchcaseComponent } from './switchcase/switchcase.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { PropertyBComponent } from './property-b/property-b.component';
import { TwowayBComponent } from './twoway-b/twoway-b.component';
import { FormsModule } from '@angular/forms';
import { TemplateComponent } from './template/template.component';
import { PipeComponent } from './pipe/pipe.component';
import { DatesheetComponent } from './datesheet/datesheet.component';
import { GradesComponent } from './grades/grades.component';
import { ResultComponent } from './result/result.component';
import { SeatingComponent } from './seating/seating.component'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NgforComponent,
    SwitchcaseComponent,
    NgclassComponent,
    PropertyBComponent,
    TwowayBComponent,
    TemplateComponent,
    PipeComponent,
    GradesComponent,
    DatesheetComponent,
    ResultComponent,
    SeatingComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'grades',
        component: GradesComponent
      },
      {
        path: 'datesheet',
        component: DatesheetComponent
      },
      {
        path: 'result',
        component: ResultComponent
      },
      {
        path: 'seating',
        component: SeatingComponent
      },


    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
