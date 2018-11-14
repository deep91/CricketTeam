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


}
