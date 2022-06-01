import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.scss'],
})
export class NavbarLeftComponent implements OnInit {
  display: any;
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-chart-bar',
        command:()=>{location.replace('/dashboard');}
      },
      {
        label: 'POS',
        icon: 'pi pi-fw pi-shopping-cart',
        command:()=>{location.replace('/pos-facturarion');}
      },
      {
        label: 'Inventario',
        icon: 'pi pi-fw pi-file',
        command:()=>{location.replace('/inventario');}
      },
    ];
  }
}
