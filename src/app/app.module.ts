import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material.module';
import { DefaultComponent } from './themes/default/default.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { DynamicClockComponent } from './shared/dynamic-clock/dynamic-clock.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { TiketComponent } from './pages/tiket/tiket.component';
import { NotificationService } from './services/notification.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProductApiService } from './services/product-api.service';
import { ProductsComponent } from './pages/products/products.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { NewProductComponent } from './pages/products/new-product/new-product.component';
import { EditProductComponent } from './pages/products/edit-product/edit-product.component';
import {CartComponent} from "./pages/cart/cart.component";
import { FactorsComponent } from './pages/factors/factors.component';
import { ShowFactorComponent } from './pages/factors/show-factor/show-factor.component';
import { FactorComponent } from './pages/factors/factor/factor.component';
import { LineChartComponent } from './shared/charts/line-chart/line-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { BarChartComponent } from './shared/charts/bar-chart/bar-chart.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    DynamicClockComponent,
    LoginComponent,
    CartComponent,
    HomeComponent,
    TiketComponent,
    FactorsComponent,
    ProductsComponent,
    NewProductComponent,
    EditProductComponent,
    ShowFactorComponent,
    FactorComponent,
    LineChartComponent,
    BarChartComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    HighchartsChartModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),

  ],
  providers: [NotificationService,ProductApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
