import { Component, OnInit } from '@angular/core';
import { TodosService } from './todos.service';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html'
})
export class TodosComponent implements OnInit {
  private todos: Todo[];
  private selectedTodo: Todo;

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.todos = this.todosService.getTodos();
    this.selectedTodo = this.selectedTodo || this.todos[0];
  }
}
