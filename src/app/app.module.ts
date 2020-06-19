import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ReporteComponent } from './component/reporte/reporte.component';
import { CooperativaIndexComponent } from './component/coopertiva/cooperativa-index/cooperativa-index.component';
import { CooperativaFormComponent } from './component/coopertiva/cooperativa-form/cooperativa-form.component';
import { CooperativaEditComponent } from './component/coopertiva/cooperativa-edit/cooperativa-edit.component';
import { ProductorIndexComponent } from './component/productor/productor-index/productor-index.component';
import { ProductorFormComponent } from './component/productor/productor-form/productor-form.component';
import { ProductorEditComponent } from './component/productor/productor-edit/productor-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ReporteComponent,
    CooperativaIndexComponent,
    CooperativaFormComponent,
    CooperativaEditComponent,
    ProductorIndexComponent,
    ProductorFormComponent,
    ProductorEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
