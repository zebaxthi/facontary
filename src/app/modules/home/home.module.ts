import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NavbarTopModule } from '../../shared/navbar-top/navbar-top.module';
import { NavbarLeftModule } from '../../shared/navbar-left/navbar-left.module';
import { InventarioModule } from '../inventario/inventario.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    HomeComponent,
    WelcomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavbarTopModule,
    NavbarLeftModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  exports: [RouterModule],
})
export class HomeModule { }
