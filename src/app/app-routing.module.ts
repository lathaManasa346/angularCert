import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnglandDetailsComponent } from './england-details/england-details.component';
import { FranceDetailsComponent } from './france-details/france-details.component';
import { GermanyDetailsComponent } from './germany-details/germany-details.component';
import { ItalyDetailsComponent } from './italy-details/italy-details.component';
import { SpainDetailsComponent } from './spain-details/spain-details.component';

const routes: Routes = [
  {path:"countryEngland",component:EnglandDetailsComponent},
  {path:"countrySpain",component:SpainDetailsComponent},
  {path:"countryGermany",component:GermanyDetailsComponent},
  {path:"countryFrance",component:FranceDetailsComponent},
  {path:"countryItaly",component:ItalyDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
