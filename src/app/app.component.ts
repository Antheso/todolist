import { Component, OnInit } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent implements OnInit {

  todos: Todo[] = [];

  constructor(
    private todoDataService: TodoDataService
  ) {
  }

  public ngOnInit() {
    this.todoDataService
      .getAllTodos()
      .subscribe(
        (todos) => {
          this.todos = todos;
        }
      );
  }

  onAddTodo(todo) {
    this.todos.push(todo);
    this.todoDataService.updateTodos(this.todos);
  }

  onToggleTodoComplete(id: number) {
    this.todos[id].complete = !this.todos[id].complete;
    this.todoDataService.updateTodos(this.todos);
  }

  onRemoveTodo(id: number) {
    this.todos.splice(id, 1);
    this.todoDataService.updateTodos(this.todos);
  }
}
