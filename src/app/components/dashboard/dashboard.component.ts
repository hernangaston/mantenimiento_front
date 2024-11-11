import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OperarioService } from '../../service/operario.service';
import { Usuario } from '../../interfaces/usuario';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  expandedMenu: number | null = null;
  operarios: Usuario[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private userService: UsersService, private operarioService: OperarioService,){}

  toggleDropdown(menuNumber: number): void {
    this.expandedMenu = this.expandedMenu === menuNumber ? null : menuNumber;
  }

  isExpanded(menuNumber: number): boolean {
    return this.expandedMenu === menuNumber;
  }

  cargarDatos() {
    this.operarioService.obtenerOperarios().subscribe({
      next: (res) => {
        this.operarios = res;
      },
      error: (err) => {
        console.log(err);
      }
    });    
  }


}
