import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogInForm } from '../entities/LogInForm';
import { userService } from '../services/userService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:LogInForm;
  mailErr:boolean = false;
  constructor(private userService:userService) { }
  ngOnInit(): void {
    this.loginForm = new LogInForm();
  }
  mailValidate(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  register(){
    if(this.mailValidate(this.loginForm.email)){
      this.userService.logIn(this.loginForm);
    }else{
      this.mailErr = true;
    }
  }
}
