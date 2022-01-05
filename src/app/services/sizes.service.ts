import { Injectable } from '@angular/core';
import { HostListener } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SizesService {

  screenWidth !: number ;
  constructor() { }


  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
        this.screenWidth = window.innerWidth;
  }
  
}
