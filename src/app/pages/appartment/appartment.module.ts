import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppartmentComponent } from './appartment.component';
import { AppTranslateModule } from "../../modules/translate/translate.module";
import { AppartmentService } from './services/appartment.service'



@NgModule({
  declarations: [AppartmentComponent],
  imports: [
    CommonModule,
    AppTranslateModule
  ],
  providers: [
    AppartmentService
  ]
})
export class AppartmentModule { }
