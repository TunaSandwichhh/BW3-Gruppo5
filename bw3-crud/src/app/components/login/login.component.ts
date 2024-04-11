import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequestBody } from 'src/app/models/login-request-body.interface';
import { AuthServiceService } from 'src/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private authSrv: AuthServiceService, private router: Router) {}

  ngOnInit(): void {
    if (this.authSrv.isAuthenticated()) {
      this.router.navigate(['/posts']);
    }

    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    const loginRequestBody: LoginRequestBody = {
      email: email,
      password: password,
      returnSecureToken: true,
    };

    this.authSrv.login(loginRequestBody).subscribe((data: any) => {
      console.log(data);

      const expirationDate = new Date(
        new Date().getTime() + data.expiresIn * 1000
      );

      this.authSrv.createUserSession(
        data.email,
        data.id,
        data.token,
        expirationDate
      );

      localStorage.setItem(
        'userSession',
        JSON.stringify(this.authSrv.userSession)
      );

      if (this.authSrv.isAuthenticated()) {
        alert('Login effettuato con successo');
        this.router.navigate(['/posts']);
      }
    });
  }
}
