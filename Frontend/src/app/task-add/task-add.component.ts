import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { Task } from '../task';
import { AddTask } from '../add-task';
import { UsersService } from '../users.service';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

	addTaskForm: FormGroup;
	users: User[];

	getUsers(): void {
	  	this.usersService.getUsers()
	      	.subscribe(users => this.users = users);
	}

	createForm() {
  	  this.addTaskForm = this.fb.group({
  		title: ['', Validators.required],
  		description: '',
		assignedTo: [1, Validators.required],
		reminderTime: ['', Validators.required]
  	  });
    }

    onSubmit() {
  	  this.tasksService.addTask(this.addTaskForm.value).subscribe();
    }

  constructor(private usersService: UsersService, private tasksService: TasksService, private fb: FormBuilder) {
	  this.createForm();
  }

  ngOnInit() {
	  this.getUsers();
  }

}
