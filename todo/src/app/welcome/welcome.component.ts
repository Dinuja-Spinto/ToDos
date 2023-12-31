import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelloWorldBean, WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  name =''
  welcomeMsgFromService!: string;
  constructor(private route : ActivatedRoute,
    private service:WelcomeDataService){}

  ngOnInit(){
    this.name = this.route.snapshot.params['name']
    console.log(this.route.snapshot.params['name'])
  }

  getWelcomeMsg(){
    //this.service.executeHelloWorldBeanService();
    //console.log(this.service.executeHelloWorldBeanService().subscribe());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccesfullResponse(response)
    );
  }

  handleSuccesfullResponse(response: HelloWorldBean){
    this.welcomeMsgFromService = response.message;
  }


}
