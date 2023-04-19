import {Component, OnInit} from '@angular/core';
import { Company } from './models';
import {CompanyService} from "./company.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hh-front';

  companies: Company[] = [];
  newCompanyName: string = '';
  newCompanyDescription: string = '';
  newCompanyCity: string = '';
  newCompanyAddress: string = '';

  constructor(private comSer: CompanyService) {
  }
  ngOnInit(){
    this.comSer.getCompanies().subscribe((companies)=>
    {this.companies = companies;});
  }
  addCompany(){
    this.comSer.createCompany(this.newCompanyName, this.newCompanyDescription, this.newCompanyCity,
      this.newCompanyAddress).subscribe(
      (company)=>
      {this.companies.push(company);
      this.newCompanyName = '';
      this.newCompanyDescription = '';
      this.newCompanyCity = '';
      this.newCompanyAddress = ''}
    );
  }
  deleteCompany(id: number){
    this.comSer.deleteCompany(id).subscribe((company) => {
        this.companies = this.companies.filter((company) => company.id !== id)
      })
  }
}
