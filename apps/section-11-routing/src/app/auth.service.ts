import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 777);
    });
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
