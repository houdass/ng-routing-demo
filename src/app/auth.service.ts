import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = false;
  role = 'ADMIN';
  constructor() {}

  login() {
    this.isAuthenticated = true;
  }

  logout() {
    this.isAuthenticated = false;
  }

  isAdmin() {
    return new Promise<boolean>(resolve => {
      setTimeout(() => {
        resolve(this.role === 'ADMIN');
      }, 1000);
    });
  }
}
