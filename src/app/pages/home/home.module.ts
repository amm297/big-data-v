import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HomeComponent } from './home.component'
import { AppTranslateModule } from "../../modules/translate/translate.module";



@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppTranslateModule
  ]

})
export class HomeModule { }
