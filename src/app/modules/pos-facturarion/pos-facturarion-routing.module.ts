import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PosFacturarionComponent } from './pos-facturarion.component';

const routes: Routes = [
  {path: '', component: PosFacturarionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosFacturarionRoutingModule { }
