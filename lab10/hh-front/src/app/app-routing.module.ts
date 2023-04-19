import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VacancyComponent} from "./vacancy/vacancy.component";

const routes: Routes = [
  {path: ':id/vacancies', component: VacancyComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
