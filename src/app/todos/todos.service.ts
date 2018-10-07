import { Todo } from './todo.model';

export class TodosService {
  private todos = [
    new Todo(1, 'Learn Angular', true),
    new Todo(2, 'Learn Webpack', false),
    new Todo(3, 'Learn Node.js', true)
  ];

  getTodo(id: number) {
    const foundTodo: Todo = this.todos.find(todo => todo.id === id);
    return foundTodo;
  }

  getTodos(): Todo[] {
    return this.todos.slice();
  }

  updateTodo(id: number, todoInfo: { name: string; completed: boolean }) {
    const todo = this.todos.find((t: Todo) => {
      return t.id === id;
    });
    if (todo) {
      todo.name = todoInfo.name;
      todo.completed = todoInfo.completed;
    }
  }
}
