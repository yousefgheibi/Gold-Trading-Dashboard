import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { SizesService } from 'src/app/services/sizes.service';
@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sideBarOpen !: boolean;
  mobile !: boolean;
  desktop !: boolean;

  constructor(private _sizeService : SizesService) { }

  ngOnInit(): void {
    this._sizeService.getScreenSize();
    if (this._sizeService.screenWidth <= 768) { 
      this.mobile = true;
      this.desktop = false;
      this.sideBarOpen = false;
    }
    else{
      this.mobile = false;
      this.desktop = true;
      this.sideBarOpen = true;
    }   
    
  }

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }
}
