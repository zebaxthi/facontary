import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './modules/login/login.module';
import { HomeModule } from './modules/home/home.module';
import { TokenInterceptor } from './core/inteceptors/token.interceptor';
import { NavbarLeftModule } from './shared/navbar-left/navbar-left.module';
import { NavbarTopModule } from './shared/navbar-top/navbar-top.module';
import { InventarioModule } from './modules/inventario/inventario.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PosFacturarionComponent } from './modules/pos-facturarion/pos-facturarion.component';

@NgModule({
  declarations: [
    AppComponent,
    PosFacturarionComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoginModule,
    BrowserAnimationsModule,
    HomeModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  exports:[RouterModule]
})
export class AppModule { }
