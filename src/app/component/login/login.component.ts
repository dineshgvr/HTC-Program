import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../services/login/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public localDBUsers: { userName: string, password: string }[] = [];

  constructor(private readonly fb: FormBuilder,
              private readonly loginService: LoginService,
              private readonly router: Router) {
    this.loginForm = this.fb.group({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.onLoadUsers();
  }

  private onLoadUsers(): void {
    this.loginService.getLoadLocalDBUser().subscribe((response: any) => {
      this.localDBUsers = response;
    });
  }

  onLogin() {
    if (this.loginForm.invalid) {
      alert('Please enter invalid username or password');
      return;
    }
    const userName = this.loginForm.value.userName;
    const password = this.loginForm.value.password;

    if (userName && password) {
       const result = this.localDBUsers.find(e => e.userName === userName && e.password === password);
       if (result) {
          this.router.navigate(['dashboard']);
       } else {
         alert('invalid user or password');
       }
    }
  }
}
