import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {CountriesComponent} from './countries/countries.component';
import {DashboardComponent} from './dashboard/dashboard.component';
const routes: Routes=[
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'countries',component:CountriesComponent},
  {path:'dashboard',component:DashboardComponent}
];
@NgModule({
 
 imports:[RouterModule.forRoot(routes)],
 exports:[RouterModule]
})
export class AppRoutingModule {}

 