import { Component, OnInit } from '@angular/core';
import { OrdenTrabajo } from '../../../interfaces/orden-trabajo'; 
import { OrdenTrabajoService } from '../../../service/orden-trabajo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-orden-trabajo',
  templateUrl: './orden-trabajo.component.html',
  styleUrl: './orden-trabajo.component.css'
})
export class OrdenTrabajoComponent implements OnInit {

  ordenesTrabajo: OrdenTrabajo[] = [];
  id_ot: string | null = null;
  constructor(private route: ActivatedRoute, private router: Router, private ordenTrabajoService:OrdenTrabajoService) { }

  ngOnInit(): void {
    this.id_ot = this.route.snapshot.paramMap.get('id_ot');
    if(this.id_ot){
      this.ordenTrabajoService.deleteOrdenTrabajo(this.id_ot).subscribe({
        next: (d) => { 
          this.router.navigate(['/dashboard/orden/lista']);
        },
        error: (e) => { console.log("Hubo un error: " + e)},
        complete: () => { console.info(`Orden ${this.id_ot} eliminada.`);}
      })
    }else{
      this.ordenTrabajoService.listaOrdenTrabajo().subscribe({
        next: (res) => {
          console.log("Ordenes", res);
          this.ordenesTrabajo = res;
        },
        error: (err) => {
          console.log(err);
        }
       })
    }
  }
}
