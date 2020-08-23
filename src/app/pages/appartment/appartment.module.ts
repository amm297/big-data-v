import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppartmentComponent } from './appartment.component';
import { AppTranslateModule } from "../../modules/translate/translate.module";
import { AppartmentService } from './services/appartment.service';
import { AppartmentDetailComponent } from './component/appartment-detail/appartment-detail.component';
import { ReviewDetailComponent } from './component/review-detail/review-detail.component';
import { PriceDetailComponent } from './component/price-detail/price-detail.component'



@NgModule({
  declarations: [
    AppartmentComponent,
    AppartmentDetailComponent,
    ReviewDetailComponent,
    PriceDetailComponent
  ],
  imports: [
    CommonModule,
    AppTranslateModule
  ],
  providers: [
    AppartmentService
  ]
})
export class AppartmentModule { }
