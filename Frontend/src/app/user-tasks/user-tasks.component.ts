import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { UsersService } from '../users.service';
import { User } from '../user';
import { Task } from '../task';

@Component({
  selector: 'app-user-tasks',
  templateUrl: './user-tasks.component.html',
  styleUrls: ['./user-tasks.component.css']
})
export class UserTasksComponent implements OnInit {

	users: User[];
	tasks: Task[];
	username = new FormControl();

	getUsers(): void {
	  	this.usersService.getUsers()
	      	.subscribe(users => this.users = users);
	}

	onSubmit() {
		this.tasksService.getUserTasks(this.username.value)
			.subscribe(tasks => this.tasks = tasks);
    }

  constructor(private tasksService: TasksService, private usersService: UsersService) { }

  ngOnInit() {
	  this.getUsers();
  }

}
