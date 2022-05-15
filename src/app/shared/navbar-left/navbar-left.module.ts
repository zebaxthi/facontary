import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarLeftComponent } from './navbar-left.component';
import {SidebarModule} from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [NavbarLeftComponent],
  imports: [
    CommonModule,
    SidebarModule,
    ButtonModule
  ],
  exports: [NavbarLeftComponent]
})
export class NavbarLeftModule { }
