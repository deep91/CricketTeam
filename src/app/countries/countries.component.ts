import { Component, OnInit } from '@angular/core';
import {Country} from '../country';
import {COUNTRIES} from '../mockcountries';
import {CountryService} from '../country.service';
import {MessagesService} from '../messages.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {


  constructor(private countryService :CountryService ,private messagesService: MessagesService) { }

  ngOnInit() {
    this.getCountries();
  }
  // country:Country=
  // {
  //   id:1,
  //   name:'India',
  //   test_playing:true
  // };
  // countries=COUNTRIES;

  countries:Country[];
  
  //Using Country Type
  // getCountries():void{
  //   this.countries=this.countryService.getCountries();
  // }


  //Using Observables

  getCountries():void{
    this.countryService.getCountries().subscribe(countries=>this.countries= countries);
  }
  selectedCountry :Country;
  onSelectCountry(country :Country):void
  {
    this.selectedCountry=country;
    // this.messagesService.add(country.name + ' Selected');
  }
  

}
