import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  expandedMenu: number | null = null;
  autenticado?:boolean;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UsersService){}

  toggleDropdown(menuNumber: number): void {
    this.expandedMenu = this.expandedMenu === menuNumber ? null : menuNumber;
  }

  isExpanded(menuNumber: number): boolean {
    return this.expandedMenu === menuNumber;
  }

  ngOnInit(): void {
    this.autenticado = this.userService.isAuthenticated();
  }

  onLogout(){
    this.userService.deleteToken();
    this.userService.logout();
    this.router.navigate(['/login']);
  }

}
