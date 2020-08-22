import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HomeComponent } from './home.component'
import { AppTranslateModule } from "../../modules/translate/translate.module";
import { HomeService } from './services/home.service';



@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppTranslateModule,
  ],
  providers: [
    HomeService
  ]

})
export class HomeModule { }
