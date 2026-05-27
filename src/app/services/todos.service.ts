import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  //created an array of todo data that is in todo.model.ts
  //we will inject and use this service in any component that will fetch the data from the todo.model.ts file

  todoItems: Array<Todo> = [{
    title: 'groceries',
    id: 0,
    userId: 1,
    completed: false
  },
  {
    title: 'car wash',
    id: 1,
    userId: 1,
    completed: false
  }];
  constructor() { }
}
