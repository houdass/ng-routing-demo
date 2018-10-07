import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { TodosService } from '../todos.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent implements OnInit {
  todo: Todo;
  constructor(private route: ActivatedRoute, private todosService: TodosService) {}

  ngOnInit() {
    // const id = +this.route.snapshot.params['id'];
    // this.todo = this.todoService.getTodo(id);
    this.route.params.subscribe((params: Params) => {
      this.todo = this.todosService.getTodo(+params['id']);
    });

    const queryParams = this.route.snapshot.queryParams;
    console.log('queryParams: ', queryParams);
    const fragment = this.route.snapshot.fragment;
    console.log('fragment: ', fragment);
  }
}
