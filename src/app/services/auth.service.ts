import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from '../shared/role';
import { Router } from '@angular/router';
import { User } from '../shared/user';
const AUTH_API = 'http://localhost:9090/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loggedUser:string| undefined;
  public isloggedIn: Boolean = false;
  public role: string='' ;

  users: any;
    constructor(private router: Router, private http: HttpClient) { } 

    logout() { 
      this.isloggedIn= false; 
      this.loggedUser = undefined; 
      this.role='';
      localStorage.removeItem('loggedUser'); 
      localStorage.setItem('isloggedIn',String(this.isloggedIn)); 
      this.router.navigate(['/login']); 
    } 
    login(user:User): Observable<any> {
      return this.http.post(AUTH_API + 'login', user ,{observe:'response'} );
      this.role= user.app_user_role;
     }
    isAdmin():Boolean{ 
      let admin: Boolean = false;
       if (!this.role) //this.roles== undefiened
        return false; 
        if (this.role == 'ADMIN') {
           admin = true; 
           } ;
         return admin; 
    }
   
   
  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'register', {username, email, password }, httpOptions);
  }
}