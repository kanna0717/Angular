import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AddRestaurantComponent } from './pages/add-restaurant/add-restaurant.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PlacesComponent } from './pages/places/places.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TourismComponent } from './pages/tourism/tourism.component';
const routes: Routes = [

  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'add-restaurant',component:AddRestaurantComponent},
  {path:'places',component:PlacesComponent},
  {path:'tourism',component:TourismComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
