import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReporteComponent } from './component/reporte/reporte.component';
import { CooperativaIndexComponent } from './component/coopertiva/cooperativa-index/cooperativa-index.component';
import { ProductorIndexComponent } from './component/productor/productor-index/productor-index.component';
import { CooperativaFormComponent } from './component/coopertiva/cooperativa-form/cooperativa-form.component';
import { ProductorFormComponent } from './component/productor/productor-form/productor-form.component';

const routes: Routes = [
  {path: 'reporte', component: ReporteComponent},
  {path: 'cooperativo', component: CooperativaIndexComponent},
  {path: 'cooperativo/add', component: CooperativaFormComponent},
  {path: 'productor', component: ProductorIndexComponent},
  {path: 'productor/add', component: ProductorFormComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
