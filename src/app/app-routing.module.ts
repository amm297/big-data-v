import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { RecommendationComponent } from "./pages/recommendation/recommendation.component";
import { AppartmentComponent } from "./pages/appartment/appartment.component";
import { ResumeComponent } from "./pages/resume/resume.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";

import { AppRoutes } from './app-routes';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: AppRoutes.HOME, component: HomeComponent },
  { path: AppRoutes.APPARTMENT, component: AppartmentComponent },
  { path: AppRoutes.RECOMMENDATION, component: RecommendationComponent },
  { path: "resume", component: ResumeComponent },
  { path: "home", component: HomeComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
