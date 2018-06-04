import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserAuthService } from '../user-auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	loginForm: FormGroup;
  	constructor(private fb: FormBuilder, private userAuthService: UserAuthService) {
		this.createForm();
  	}

	createForm() {
	    this.loginForm = this.fb.group({
	      username: ['', Validators.required],
		  password: ['', Validators.required]
	    });
	}

	onSubmit() {
		this.userAuthService.login(this.loginForm.value).subscribe(token => this.userAuthService.storeToken(token));
	}


  ngOnInit() {
	  this.userAuthService.checkToken();
  }

}
