import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vacancy} from "./models";

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  constructor(private client: HttpClient) { }

  BASE_URL = "http://127.0.0.1:8000"
  getVacancies(id:number): Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/api/companies/${id}/vacancies/`)
  }

}
