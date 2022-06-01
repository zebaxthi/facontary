import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioRoutingModule } from './inventario-routing.module';
import { RouterModule } from '@angular/router';
import { InventarioComponent } from './inventario.component';
import { NavbarLeftModule } from '../../shared/navbar-left/navbar-left.module';
import { NavbarTopModule } from '../../shared/navbar-top/navbar-top.module';


@NgModule({
  declarations: [InventarioComponent],
  imports: [
    CommonModule,
    InventarioRoutingModule,
    NavbarLeftModule,
    NavbarTopModule
  ],
})
export class InventarioModule { }
