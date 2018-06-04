import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAuthService } from './user-auth.service';
import { Notification } from './notification';

@Injectable({
  providedIn: 'root'
})

export class NotificationService {

	private notificationsUrl = 'http://127.0.0.1:8000/notifications/';

	getNotifications(): Observable<Notification[]> {
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
				'Authorization': 'Token '+ this.userAuthService.getToken()
			})
		};
	  	return this.http.get<Notification[]>(this.notificationsUrl, httpOptions);
	}

  constructor(private http: HttpClient, private userAuthService: UserAuthService) { }
}
