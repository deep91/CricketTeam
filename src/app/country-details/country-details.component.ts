import { Component, OnInit ,Input} from '@angular/core';
import { Country } from '../country';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
@Input() country:Country;
}
