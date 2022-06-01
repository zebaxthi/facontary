import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
      children: [
      {path: 'inventario', loadChildren: () => import('../inventario/inventario.module').then(mod => mod.InventarioModule)},
      {path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(mod => mod.DashboardModule)},
      {path: 'pos-facturarion', loadChildren: () => import('../pos-facturarion/pos-facturarion.module').then(mod => mod.PosFacturarionModule)},
    ]
  },
  {path: '**', redirectTo: 'home', pathMatch: 'full',}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
