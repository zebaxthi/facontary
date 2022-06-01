import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarTopComponent } from './navbar-top.component';
import {AvatarModule} from 'primeng/avatar';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';



@NgModule({
  declarations: [NavbarTopComponent],
  imports: [
    CommonModule,
    AvatarModule,
    SidebarModule,
    PanelMenuModule
  ],
  exports: [NavbarTopComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavbarTopModule { }
