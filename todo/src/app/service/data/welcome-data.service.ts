import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean{
  constructor(public message:string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8081/hello-world-bean')
  }

  executeHelloWorldBeanServicePath(name: string){
    return this.http.get<HelloWorldBean>(`http://localhost:8081/hello-world-bean/${name}`)
  }
}
