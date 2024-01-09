import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-to-dos/list-to-dos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }

  retriveAllTodos(username:string){
    return this.http.get<Todo[]>(`http://localhost:8081/users/${username}/todos`);
  }

  deleteTodo(username:string,id:any){
    return this.http.delete(`http://localhost:8081/users/${username}/todos/${id}`);
  }

  retreveTodo(username:string,id:any){
    return this.http.get<Todo>(`http://localhost:8081/users/${username}/todos/${id}`);
  }

  updateTodo(username:string,id:any,todo:Todo | undefined){
    return this.http.put<Todo>(`http://localhost:8081/users/${username}/todos/${id}`,todo);
  }
}
