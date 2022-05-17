import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.css'],
})
export class NavbarLeftComponent implements OnInit {
  display: any;
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-home',
      },
      {
        label: 'Vender',
        icon: 'pi pi-fw pi-shopping-cart',
      },
      {
        label: 'Inventario',
        icon: 'pi pi-fw pi-file',
      },
      {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
      },
    ];
  }
}
