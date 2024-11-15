import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { UsersService } from '../service/users.service';


@Injectable({
  providedIn: 'root'
})

export class operarioGuard implements CanActivate {
  constructor(private authService: UsersService, private router: Router) {}
  canActivate(): boolean {
    if (this.authService.isAuthenticated() && this.authService.isOperador()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}