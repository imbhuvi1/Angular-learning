import { Injectable, inject} from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  http = inject(HttpClient); //now we have access to http post, get, put, patch,etc.

  //created an array of todo data that is in todo.model.ts
  //we will inject and use this service in any component that will fetch the data from the todo.model.ts file

  /* todoItems: Array<Todo> = [{
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
   constructor(){}  */

   //using http api to fetch the array
  getTodosFromApi(){
    const url = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<Todo>>(url);
  }
}
