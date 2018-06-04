import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksViewComponent } from './tasks-view/tasks-view.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UserTasksComponent } from './user-tasks/user-tasks.component';
import { UserNotificationsComponent } from './user-notifications/user-notifications.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full'
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'tasks/all',
		component: TasksViewComponent
	},
	{
		path: 'tasks/user',
		component: UserTasksComponent
	},
	{
		path: 'notifications',
		component: UserNotificationsComponent
	},
	{
		path: 'tasks/add',
		component: TaskAddComponent
	},
	{
		path: 'logout',
		component: LogoutComponent
	}
];

@NgModule({
  imports: [
	  RouterModule.forRoot(routes)
  ],
  exports: [
	  RouterModule
  ]
})
export class AppRoutingModule { }
