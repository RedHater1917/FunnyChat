import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpForm } from '../entities/signUpForm';
import { User } from '../entities/user';
import { userService } from '../services/userService';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm:SignUpForm;
  mailErr:boolean = false;
  constructor(private userService:userService,  private router: Router) { }
  ngOnInit(): void {
    this.signUpForm = new SignUpForm();
  }
  mailValidate(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  register(){
    if(this.mailValidate(this.signUpForm.email)){
      this.userService.signUp(this.signUpForm).subscribe(
        ans=>{
          console.log(ans);
          this.router.navigateByUrl("/login")
        }
      )
    }else{
      this.mailErr = true;
    }
  }
}
