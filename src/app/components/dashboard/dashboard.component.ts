import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OperarioService } from '../../service/operario.service';
import { Usuario } from '../../interfaces/usuario';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  expandedMenu: number | null = null;
  operarios: Usuario[] = [];
  operario=false

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

  ngOnInit(): void {
      this.operario = this.userService.isOperador();
  }

}
