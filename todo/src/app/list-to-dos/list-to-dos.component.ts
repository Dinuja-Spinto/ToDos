import { Component } from '@angular/core';

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
export class ListToDosComponent {

  todos=[
    new Todo(1, 'Learn to Code', false, new Date()),
    new Todo(2, 'Become an expert', false, new Date()),
    new Todo(3, 'visit sri lanka', false, new Date())
  ]
}
