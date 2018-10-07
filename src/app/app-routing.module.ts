import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todos/todo/todo.component';
import { TodoEditComponent } from './todos/todo-edit/todo-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth.guard';
import { TodoEditCanDeactivateGuard } from './todos/todo-edit/todo-edit-candeactivate.guard';
import { AboutUsResolver } from './about-us/about-us-resolver.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'todos',
    component: TodosComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: ':id', component: TodoComponent },
      { path: ':id/edit', component: TodoEditComponent, canDeactivate: [TodoEditCanDeactivateGuard] }
    ]
  },
  { path: 'contact-us', component: ContactUsComponent, data: { name: 'Framework Angular' } },
  { path: 'about-us', component: AboutUsComponent, resolve: { framework: AboutUsResolver } },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
