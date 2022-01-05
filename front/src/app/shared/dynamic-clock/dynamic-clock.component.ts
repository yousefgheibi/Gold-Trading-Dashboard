import * as momentJalaali from "moment-jalaali";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-clock',
  templateUrl: './dynamic-clock.component.html',
  styleUrls: ['./dynamic-clock.component.scss']
})
export class DynamicClockComponent implements OnInit {
  today!:any;

  
  now!: string;
  nowLongDateFormat!: string;
  nowExtraLongDateFormat!: string;


  constructor() { }

  ngOnInit(): void {
    this.today = Date.now();
    setInterval(()=>{
      this.persianDateTests();
    },1000);
    
  }

  
  persianDateTests() {
    
    momentJalaali.loadPersian(/*{ usePersianDigits: true }*/); // نمایش فارسى نام ماه‌ها، روزها و امثال آن

    this.now = momentJalaali().format('jYYYY/jM/jD HH:mm:ss');
    this.nowLongDateFormat = momentJalaali().format("jD jMMMM jYYYY [ساعت] LT");
    this.nowExtraLongDateFormat = momentJalaali().format(
      "dddd jD jMMMM - HH:mm:ss"
    );
    
  }

}
