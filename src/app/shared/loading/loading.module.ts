import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading.component';
import {DialogModule} from 'primeng/dialog';



@NgModule({
  declarations: [
    LoadingComponent
  ],
  exports: [LoadingComponent],
  imports: [
    CommonModule,
    DialogModule
  ]
})
export class LoadingModule { }
