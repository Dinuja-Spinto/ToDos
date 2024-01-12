import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string) {
    if (username === "Dinuja" && password === "pinto") {
      sessionStorage.setItem('authenticaterUser',username);
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser')
  }

  executeBasicAuthService(username: string, password: string){
    
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    return this.http.get<AuthenticationBean>(`http://localhost:8081/basicAuth`,
    {headers});
  }

}

export class AuthenticationBean{
  constructor(public message:string){}
}