import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-view',
  templateUrl: './tasks-view.component.html',
  styleUrls: ['./tasks-view.component.css']
})
export class TasksViewComponent implements OnInit {

	tasks: Task[];

	getTasks(): void {
	  	this.tasksService.getTasks()
	      	.subscribe(tasks => this.tasks = tasks);
	}

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
	  this.getTasks();
  }

}
