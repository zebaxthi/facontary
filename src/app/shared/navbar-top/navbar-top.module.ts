import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarTopComponent } from './navbar-top.component';
import {AvatarModule} from 'primeng/avatar';
import { SidebarModule } from 'primeng/sidebar';



@NgModule({
  declarations: [NavbarTopComponent],
  imports: [
    CommonModule,
    AvatarModule,
    SidebarModule
  ],
  exports: [NavbarTopComponent],
})
export class NavbarTopModule { }
