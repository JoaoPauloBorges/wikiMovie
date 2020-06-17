import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './navbar/navbar.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UploaderModule } from './uploader/uploader.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarModule,
    MatSnackBarModule,
    UploaderModule
  ],
  exports: [
    NavbarModule,
    MatSnackBarModule,
    UploaderModule]
})
export class SharedModule { }
