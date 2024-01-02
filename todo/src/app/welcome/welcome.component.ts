import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelloWorldBean, WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  name ='Dinuja'
  welcomeMsgFromService!: string;
  constructor(private route : ActivatedRoute,
    private service:WelcomeDataService){}

  ngOnInit(){
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMsg(){
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccesfullResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  getWelcomeMsgWithPara(){
    this.service.executeHelloWorldBeanServicePath(this.name).subscribe(
      response => this.handleSuccesfullResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleErrorResponse(error: any): void {
    this.welcomeMsgFromService = error.error.message;
  }

  handleSuccesfullResponse(response: HelloWorldBean){
    this.welcomeMsgFromService = response.message;
  }


}
