import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SizesService } from 'src/app/services/sizes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBarForMe = new EventEmitter<void>();
  mobile !: Boolean;
  screenSize !: number;

  constructor(public router: Router , private _sizeService : SizesService) { }

  ngOnInit(): void {
    this._sizeService.getScreenSize();
    this.screenSize = this._sizeService.screenWidth;
    if(this.screenSize <= 768){
      this.mobile = true;
    }
    else{
      this.mobile = false;
    }
  }

  toggleSideBar(){
    this.toggleSideBarForMe.emit();
  }
  
  exitTo(){
    this.router.navigate(['/login']);
  }
}
