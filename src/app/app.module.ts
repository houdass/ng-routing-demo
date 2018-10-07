import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todos/todo/todo.component';
import { TodoEditComponent } from './todos/todo-edit/todo-edit.component';
import { TodosService } from './todos/todos.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth.guard';
import { TodoEditCanDeactivateGuard } from './todos/todo-edit/todo-edit-candeactivate.guard';
import { AboutUsResolver } from './about-us/about-us-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    TodosComponent,
    TodoComponent,
    TodoEditComponent,
    NotFoundComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [TodosService, AuthGuard, TodoEditCanDeactivateGuard, AboutUsResolver],
  bootstrap: [AppComponent]
})
export class AppModule {}
