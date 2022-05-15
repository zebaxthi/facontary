import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NavbarTopModule } from '../../shared/navbar-top/navbar-top.module';
import { NavbarLeftModule } from '../../shared/navbar-left/navbar-left.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavbarTopModule,
    NavbarLeftModule
  ],
  exports: [RouterModule],
})
export class HomeModule { }
