import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  name =''

  constructor(private route : ActivatedRoute,
    private service:WelcomeDataService){}

  ngOnInit(){
    this.name = this.route.snapshot.params['name']
    console.log(this.route.snapshot.params['name'])
  }

  getWelcomeMsg(){
    //this.service.executeHelloWorldBeanService();
    console.log(this.service.executeHelloWorldBeanService());
  }

}
