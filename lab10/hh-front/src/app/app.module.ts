import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { VacancyComponent } from './vacancy/vacancy.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    VacancyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [VacancyComponent]
})
export class AppModule { }
