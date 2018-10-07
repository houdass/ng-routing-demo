import { Component, Input } from '@angular/core';
import { Todo } from '../todo.model';
import { TodosService } from '../todos.service';
import { ActivatedRoute, Params } from '@angular/router';
import { TodoEditCanDeactivate } from './todo-edit-candeactivate.guard';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html'
})
export class TodoEditComponent implements TodoEditCanDeactivate {
  private todo: Todo;

  constructor(private route: ActivatedRoute, private todosService: TodosService) {
    this.route.params.subscribe((params: Params) => {
      this.todo = this.todosService.getTodo(+params['id']);
    });
  }

  onUpdateTodo() {
    this.todosService.updateTodo(this.todo.id, this.todo);
  }

  canDeactivate() {
    return confirm('Would you like to exit?');
  }
}
