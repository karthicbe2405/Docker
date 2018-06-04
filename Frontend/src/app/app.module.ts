import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { TasksViewComponent } from './tasks-view/tasks-view.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UserTasksComponent } from './user-tasks/user-tasks.component';
import { UserNotificationsComponent } from './user-notifications/user-notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksViewComponent,
    TaskAddComponent,
    LoginComponent,
    LogoutComponent,
    UserTasksComponent,
    UserNotificationsComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
	AppRoutingModule,
	ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
