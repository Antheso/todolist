import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent {

  @Input() todo: Todo;

  @Output()
  remove: EventEmitter<number> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  toggleTodoComplete() {
    this.toggleComplete.emit();
  }

  removeTodo() {
    this.remove.emit();
  }

}
