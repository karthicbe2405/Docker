import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import { Notification } from '../notification';

@Component({
  selector: 'app-user-notifications',
  templateUrl: './user-notifications.component.html',
  styleUrls: ['./user-notifications.component.css']
})
export class UserNotificationsComponent implements OnInit {

	notifications: Notification[];

	getNotifications(): void {
	  	this.notificationService.getNotifications()
	      	.subscribe(notifications => this.notifications = notifications);
	}

    socketConnect() {
        var gn = this;
        var ws = new WebSocket('ws://localhost:8000/ws/foobar?subscribe-broadcast&publish-broadcast&echo');
        ws.onopen = function() {
            console.log("websocket connected");
        };
        ws.onmessage = function(e) {
            console.log("Received: " + e.data);
            gn.getNotifications();
        };
        ws.onerror = function(e) {
            console.error(e);
        };
        ws.onclose = function(e) {
            console.log("connection closed");
        }
    }

	constructor(public notificationService: NotificationService) { }

  ngOnInit() {
	  this.getNotifications();
      this.socketConnect();
  }

}
