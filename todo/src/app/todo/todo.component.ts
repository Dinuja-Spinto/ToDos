import { Component } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-to-dos/list-to-dos.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  id:number | undefined;
  todo:Todo | undefined;

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute
  ){}

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(1,'',false,new Date());
    this.todoService.retreveTodo('Dinuja',this.id).subscribe(
      data=> this.todo = data
    )
  }

  saveTodo(){

  }
}
