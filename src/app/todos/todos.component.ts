import { Component, inject, OnInit, signal} from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports:[],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})

//to use ngOnInit() we have implemented the OnInit interface
export class TodosComponent implements OnInit{
  todoService = inject(TodosService);

  //creating a signal of empty array later it will be set in the ngOnInit()
  todoItems = signal<Array<Todo>>([]);
  //it will trigger whenever this component initiated or the first time it comes into view
  ngOnInit(): void {
      console.log(this.todoService.todoItems);
      this.todoItems.set(this.todoService.todoItems);
  }
}
