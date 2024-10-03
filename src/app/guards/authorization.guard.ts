import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsersService } from '../service/users.service';


@Injectable({
  providedIn: 'root'
})

export class AuthorizationGuard implements CanActivate {
  constructor(private authService: UsersService, private router: Router) {}
  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      console.log("Error")
      this.router.navigate(['login']);
      return false;
    }
  }
}