import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {CountriesComponent} from './countries/countries.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CountryDetailsComponent} from './country-details/country-details.component';
const routes: Routes=[
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'countries',component:CountriesComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'detail/:id',component:CountryDetailsComponent}
];
@NgModule({
 
 imports:[RouterModule.forRoot(routes)],
 exports:[RouterModule]
})
export class AppRoutingModule {}

 