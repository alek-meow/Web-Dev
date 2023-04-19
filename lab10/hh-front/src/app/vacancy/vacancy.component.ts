import {Component, OnInit} from '@angular/core';
import {Vacancy} from "../models";
import {CompanyService} from "../company.service";
import {VacancyService} from "../vacancy.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit{

  vacancies: Vacancy[] = [];

  constructor(private vacSer: VacancyService, private route : ActivatedRoute) {
  }
  ngOnInit(){
    this.route.paramMap.subscribe((params : ParamMap) => {
      const id = Number(params.get('id'));
      this.vacSer.getVacancies(id).subscribe((vacancies)=>
      {this.vacancies = vacancies;});
    })
  }
}
