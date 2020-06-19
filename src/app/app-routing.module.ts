import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReporteComponent } from './component/reporte/reporte.component';
import { CooperativaIndexComponent } from './component/coopertiva/cooperativa-index/cooperativa-index.component';
import { ProductorIndexComponent } from './component/productor/productor-index/productor-index.component';

const routes: Routes = [
  {path: 'reporte', component: ReporteComponent},
  {path: 'cooperativo', component: CooperativaIndexComponent},
  {path: 'productor', component: ProductorIndexComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
