import { Component, OnInit } from '@angular/core';
import {Country} from '../country';
import {CountryService} from '../country.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  countries:Country[]=[];
  constructor(private countryService:CountryService) { }
  
  ngOnInit() {
    this.getCountries();
  }

  
  getCountries():void
  {
    this.countryService.getCountries().subscribe(countries => this.countries=countries.slice(0,4));
  }


}
