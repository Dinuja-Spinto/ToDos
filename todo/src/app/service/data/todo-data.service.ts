import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-to-dos/list-to-dos.component';
import { API_URL } from 'src/app/app.constent';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }

  retriveAllTodos(username:string){
    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`);
  }

  deleteTodo(username:string,id:any){
    return this.http.delete(`${API_URL}/users/${username}/todos/${id}`);
  }

  retreveTodo(username:string,id:any){
    return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username:string,id:any,todo:Todo | undefined){
    return this.http.put<Todo>(`${API_URL}/users/${username}/todos/${id}`,todo);
  }

  createTodo(username:string,todo:Todo | undefined){
    return this.http.post<Todo>(`${API_URL}/users/${username}/todos`,todo);
  }
}
