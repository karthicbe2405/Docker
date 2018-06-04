import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Credentials } from './credentials';
import { Token } from './token';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class UserAuthService {

	private loginUrl = 'http://127.0.0.1:8000/login/';

	/** POST: add a new task to the server */
	login (credentials): Observable<Token> {
	  	return this.http.post<Token>(this.loginUrl, credentials, httpOptions);
	}

	storeToken(token) {
		console.log(token.token);
		document.cookie = "Token="+token.token;
	}

	getToken() {
	    var name = "Token=";
	    var decodedCookie = decodeURIComponent(document.cookie);
	    var ca = decodedCookie.split(';');
	    for(var i = 0; i <ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0) == ' ') {
	            c = c.substring(1);
	        }
	        if (c.indexOf(name) == 0) {
	            return c.substring(name.length, c.length);
	        }
	    }
	    return "";
	}

	checkToken() {
		if(this.getToken() !== "") {
			this.location.back();
		}
	}

	logout() {
		document.cookie = "Token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		//this.router.navigate(['/login']);
	}

  constructor(private http: HttpClient, private router: Router, private location: Location) { }
}
