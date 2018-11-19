import { Injectable } from '@angular/core';
import { Country } from './country';
import {COUNTRIES} from './mockcountries';
import {Observable ,of} from 'rxjs';
import {MessagesService} from './messages.service';
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private messages :MessagesService) { }

  //Using Country Type
// getCountries():Country[]
// {
//   return COUNTRIES;
// }

//Using Observables
getCountries():Observable <Country[]>
{
 
  return of(COUNTRIES);
}


getCountry(id:number):Observable <Country>
{
  this.messages.add('CountryService:fetched country id =' +id );
  return of (COUNTRIES.find(country => country.id ===id));
}


}
