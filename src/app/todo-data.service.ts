import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable()
export class TodoDataService {

  constructor(
    private api: ApiService
  ) {
  }

  // Simulate PUT /todos/:id
  updateTodos(todos: Todo[]): void {
    return this.api.updateTodos(todos);
  }

  // Simulate GET /todos
  getAllTodos(): Observable<Todo[]> {
    return this.api.getAllTodos();
  }

}
