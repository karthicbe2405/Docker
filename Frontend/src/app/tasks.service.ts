import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAuthService } from './user-auth.service';
import { Task } from './task';
import { AddTask } from './add-task';


@Injectable({
  providedIn: 'root'
})

export class TasksService {

	private tasksUrl = 'http://127.0.0.1:8000/tasks/';

	getTasks (): Observable<Task[]> {
	  	return this.http.get<Task[]>(this.tasksUrl);
	}

	getUserTasks (id): Observable<Task[]> {
		return this.http.get<Task[]>(this.tasksUrl+id);
	}

	addTask (task: Task): Observable<Task> {
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
				'Authorization': 'Token '+ this.userAuthService.getToken()
			})
		};
	  	return this.http.post<Task>(this.tasksUrl, task, httpOptions);
	}

  constructor(private http: HttpClient, private userAuthService: UserAuthService) { }
}
