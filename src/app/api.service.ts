import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Observable, of } from 'rxjs';

@Injectable()
export class ApiService {

  public todos: Todo[] = [];

  constructor() { }

  public getAllTodos(): Observable<Todo[]> {
    return of(
      JSON.parse(localStorage.getItem('todos')) || []
    );
  }

  updateTodos(todos: Todo[]): void {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

}
