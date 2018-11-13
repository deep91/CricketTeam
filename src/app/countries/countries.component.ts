import { Component, OnInit } from '@angular/core';
import {Country} from '../country';
import {COUNTRIES} from '../mockcountries';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  // country:Country=
  // {
  //   id:1,
  //   name:'India',
  //   test_playing:true
  // };
  countries=COUNTRIES;

  selectedCountry :Country;
  onSelectCountry(country :Country):void
  {
    this.selectedCountry=country;
  }
  constructor() { }

  ngOnInit() {
  }

  

}
