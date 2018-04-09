import {NgModule} from '@angular/core';
import {HomePageComponent} from './home-page/home-page.component';
import {CarsPageComponent} from './cars-page/cars-page.component';
import {Routes, RouterModule} from '@angular/router';
import {CarPageComponent} from './car-page/car-page.component';
import {NotFoundComponent} from './not-found/not-found.component';

const appRoutes: Routes = [
  //http://localhost:4200/cars
  { path: '', component: HomePageComponent },
  { path: 'cars', component: CarsPageComponent, children: [
    {path: ':id/:name', component: CarPageComponent}
  ] },
  { path: 'not-found', component: NotFoundComponent},
  { path: '**', redirectTo: '/not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
