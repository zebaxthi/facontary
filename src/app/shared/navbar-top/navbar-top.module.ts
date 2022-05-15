import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarTopComponent } from './navbar-top.component';
import {AvatarModule} from 'primeng/avatar';



@NgModule({
  declarations: [NavbarTopComponent],
  imports: [
    CommonModule,
    AvatarModule
  ],
  exports: [NavbarTopComponent],
})
export class NavbarTopModule { }
