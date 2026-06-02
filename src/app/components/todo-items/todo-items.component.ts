import { UpperCasePipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { HighlightCompletedTodoDirective } from 'src/app/directives/highlight-completed-todo.directive';
import { Todo } from 'src/app/model/todo.type';

@Component({
  selector: 'app-todo-items',
  standalone: true,
  imports: [HighlightCompletedTodoDirective, UpperCasePipe],
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.scss']
})
export class TodoItemsComponent {
  todo = input.required<Todo>();
  todoToggled = output<Todo>();

  todoClicked(){
    this.todoToggled.emit(this.todo()); 
  }
}
