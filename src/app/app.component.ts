import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from './service/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'mantenimiento_front';
  autenticado = false;
  user=""

  constructor(
    private router: Router,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.autenticado = this.userService.isAuthenticated();
    this.userService.getAuthStatusListener().subscribe((isAuthenticated) => {
      this.autenticado = isAuthenticated;
    });
  }

  onLogout(): void {
    this.userService.deleteToken();
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
