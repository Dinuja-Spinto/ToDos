import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

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

  constructor(private router : Router, private hrdCdAuthService: HardcodedAuthenticationService){}

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

}
