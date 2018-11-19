import { Component, OnInit ,Input} from '@angular/core';
import { Country } from '../country';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {CountryService} from '../country.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  constructor(private countryService :CountryService,
              private location :Location ,
              private router :ActivatedRoute) { }

  ngOnInit():void {
    this.getCountry();
  }
@Input() country:Country;

getCountry():void
{
  const id = +this.router.snapshot.paramMap.get('id');
  this.countryService.getCountry(id).subscribe(country =>this.country =country);
}

goBack():void
{
  this.location.back();
}
}
