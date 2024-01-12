import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = 'Dinuja'
  password = 'pinto'
  errorMsg = 'Invalid Credentials'
  invalidLoging = false

  constructor(private router : Router, private hrdCdAuthService: HardcodedAuthenticationService,
    private basicAuthService: BasicAuthenticationService){}

  handleLogin(){
    //console.log(this.username);
    if(this.hrdCdAuthService.authenticate(this.username, this.password)){
      this.router.navigate(['welcome',this.username])
      this.invalidLoging = false
    }
    else{
      this.invalidLoging = true
    }
  }

  handleBasicAuthLogin(){
    //console.log(this.username);
    this.basicAuthService.executeBasicAuthService(this.username, this.password).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['welcome',this.username])
        this.invalidLoging = false
      },
      error=>{
        console.log(error);
        this.invalidLoging = true;
      }
    )
  }

}
