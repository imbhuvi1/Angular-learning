import { Component, inject, OnInit, signal} from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { TodoItemsComponent } from '../components/todo-items/todo-items.component';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterTodoPipe } from '../pipes/filter-todo.pipe';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoItemsComponent, FormsModule, FilterTodoPipe],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})

//to use ngOnInit() we have implemented the OnInit interface
export class TodosComponent implements OnInit{
  todoService = inject(TodosService);

  //creating a signal of empty array later it will be set in the ngOnInit()
  todoItems = signal<Array<Todo>>([]);

  searchTerm = signal('');

  //it will trigger whenever this component initiated or the first time it comes into view
  ngOnInit(): void {
      this.todoService.getTodosFromApi()
        .pipe(
          catchError((err)=> {
            console.log(err);
            throw err;
          })
        )
        .subscribe((todos) => {
          this.todoItems.set(todos);
        });
  }

  updateTodoItem(todoItem : Todo){
    this.todoItems.update((todos) => {
      return todos.map(todo => {
        if(todo.id === todoItem.id){
          return {
            ...todo,
            completed: !todo.completed 
          }
        }
        return todo;
      })
    })
  }
}
