import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  getAuthenticatedUser(){
    return sessionStorage.getItem('authenticaterUser');
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem('token');

    return null;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser')
    sessionStorage.removeItem('token')
  }

  executeBasicAuthService(username: string, password: string){
    
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    return this.http.get<AuthenticationBean>(`http://localhost:8081/basicAuth`,
    {headers}).pipe(
      map(
        data =>{
          sessionStorage.setItem('authenticaterUser',username);
          sessionStorage.setItem('token',basicAuthHeaderString);
          return data;
        }
      )
    );
  }

}

export class AuthenticationBean{
  constructor(public message:string){}
}