import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  formGroupLogin!: FormGroup;
  constructor(public router : Router, private _notification:NotificationService) { }

  ngOnInit(): void {
    this.formGroupLogin = new FormGroup({
      'email':new FormControl('test@gmail.com'),
      'password':new FormControl('12345678')
    });


  }

  loginForm(){
    if(this.formGroupLogin.value.email === 'test@gmail.com' && this.formGroupLogin.value.password == '12345678'){
     
      this.router.navigate(['']);
      this._notification.success('ورود شما موفقیت آمیز بود.');
      console.log("logined");
    }
    else{

      this.router.navigate(['/login']);
      this._notification.warn('ایمیل یا رمز عبور درست نیست!');
      console.log("not login!");
    }
    
  }


}
