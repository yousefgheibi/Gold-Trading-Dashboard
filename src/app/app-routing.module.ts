import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { FactorsComponent } from './pages/factors/factors.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductsComponent } from './pages/products/products.component';
import { TiketComponent } from './pages/tiket/tiket.component';
import { DefaultComponent } from './themes/default/default.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path :'' , component: DefaultComponent ,
    children:[
  {path:'',component:HomeComponent },
  {path:'products',component:ProductsComponent},
  {path:'factors',component:FactorsComponent},
  {path:'cart',component:CartComponent},
  {path:'ticket',component:TiketComponent},
  {path:'**' , redirectTo : ''}
      ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
