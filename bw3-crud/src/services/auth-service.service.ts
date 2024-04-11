import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserSession } from 'src/app/models/UserSession';
import { SignupRequestBody } from 'src/app/models/signup-request-body.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  isLoggedIn = false;

  signupUrl =
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDQg7VJW4VX849JdUjwRYaxwMNP5CVHf1I';

  loginUrl =
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDQg7VJW4VX849JdUjwRYaxwMNP5CVHf1I';

  userSession!: UserSession | null;

  constructor(private http: HttpClient) {}

  isAuthenticated() {
    return this.isLoggedIn;
  }

  signup(body: SignupRequestBody) {
    return this.http.post(this.signupUrl, body);
  }
}
