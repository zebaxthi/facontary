import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarLeftComponent } from './navbar-left.component';
import {SidebarModule} from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import {PanelMenuModule} from 'primeng/panelmenu';



@NgModule({
  declarations: [NavbarLeftComponent],
  imports: [
    CommonModule,
    SidebarModule,
    ButtonModule,
    PanelMenuModule,
    SidebarModule
  ],
  exports: [NavbarLeftComponent]
})
export class NavbarLeftModule { }
