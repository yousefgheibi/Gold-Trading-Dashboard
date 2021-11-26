import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroupLogin!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.formGroupLogin = new FormGroup({
      'email':new FormControl(null),
      'password':new FormControl(null)
    });


  }

  loginForm(){
    console.log(this.formGroupLogin.value);
  }


}
