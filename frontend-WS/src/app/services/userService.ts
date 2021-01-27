import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { LogInForm } from "../entities/LogInForm";
import { SignUpForm } from "../entities/signUpForm";
import { User } from "../entities/user";

type EntityResponseType = HttpResponse<User>;

@Injectable({ providedIn: 'root' })
export class userService {
  public resourceUrl = 'http://localhost:48888/users';
  currentUser: User;

  constructor(protected http: HttpClient, private router: Router) {}

  signUp(form: SignUpForm){
    console.log(form);
    return this.http.post<User>(this.resourceUrl+"/signUp", form, { observe: 'response' });
  }
  logIn(form: LogInForm){
    console.log(form);
    this.http.post<LogInForm>(this.resourceUrl+"/login", form, { observe: 'response' }).subscribe(
      data=>{
        this.currentUser=data.body;
        console.log(this.currentUser);
        this.router.navigateByUrl("/main")
      }
    );
  }

  find(id: string): Observable<EntityResponseType> {
    return this.http.get<User>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
  findAll():Observable<User[]>{
    return this.http.get<GetResponse>(this.resourceUrl).pipe(
      map(res=>res._embedded.users)
    );
  }

  
}
interface GetResponse{
  _embedded:{
    users:User[];
  }
}