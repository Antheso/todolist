import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo';

@Component(
  {
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
  }
)
export class TodoListComponent {

  @Input()
  todos: Todo[];

  @Output()
  remove: EventEmitter<number> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  onToggleTodoComplete(id: number) {
    this.toggleComplete.emit(id);
  }

  onRemoveTodo(id: number) {
    this.remove.emit(id);
  }

}
