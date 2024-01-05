import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Route, Router } from '@angular/router';

export class Todo{
  constructor(
    public id :number,
    public description : string,
    public done: boolean,
    public targetDate: Date
  ){}
}

@Component({
  selector: 'app-list-to-dos',
  templateUrl: './list-to-dos.component.html',
  styleUrls: ['./list-to-dos.component.css']
})
export class ListToDosComponent implements OnInit{
todos:Todo[] | undefined;
message: string | undefined;
  // todos=[
  //   new Todo(1, 'Learn to Code', false, new Date()),
  //   new Todo(2, 'Become an expert', false, new Date()),
  //   new Todo(3, 'visit sri lanka', false, new Date())
  // ]

  constructor(
    private todoService : TodoDataService,
    private router:Router
  ){}
  ngOnInit(){
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retriveAllTodos("dinuja").subscribe(
      response =>{
        console.log(response);
        this.todos = response;
      }
    );
  }

  deleteTodo(id: any){
    console.log(id);
    this.todoService.deleteTodo('Dinuja',id).subscribe(
      response=>{
        console.log(response);
        this.message=`Delete of todo ${id} Successful!`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id: any){
    console.log(id+" update");
    this.router.navigate(['todos',id]);
  }

}
