import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';

export interface TodoEditCanDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class TodoEditCanDeactivateGuard implements CanDeactivate<TodoEditCanDeactivate> {
  canDeactivate(
    component: TodoEditCanDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate();
  }
}
