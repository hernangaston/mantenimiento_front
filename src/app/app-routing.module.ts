import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthorizationGuard } from './guards/authorization.guard';
import { InicioComponent } from './components/inicio/inicio.component';
import { ActivoFormComponent } from './components/activo/activoform/activoform.component';
import { EdificioFormComponent } from './components/edificio/edificio-form/edificio-form.component';
import { OrdenTrabajoFormComponent } from './components/ordenTrabajo/orden-trabajo-form/orden-trabajo-form.component';
import { PisoFormComponent } from './components/piso/piso-form/piso-form.component';
import { SectorFormComponent } from './components/sector/sector-form/sector-form.component';
import { TagFormComponent } from './components/tag/tag-form/tag-form.component';
import { TareaFormComponent } from './components/tarea/tarea-form/tarea-form.component';
import { TipoTareaFormComponent } from './components/tipoTarea/tipo-tarea-form/tipo-tarea-form.component';
import { UbicacionFormComponent } from './components/ubicacion/ubicacion-form/ubicacion-form.component';
import { OrdenTrabajoComponent } from './components/ordenTrabajo/orden-trabajo/orden-trabajo.component';
import { OrdenTrabajoVistaComponent } from './components/ordenTrabajo/orden-trabajo-vista/orden-trabajo-vista.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { operarioGuard } from './guards/operario.guard';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "logout", component: DashboardComponent, canActivate: [AuthorizationGuard]},
  { path: "registro", component: RegistroComponent},
  { path: "inicio", component: InicioComponent},
  {
    path: "dashboard", component: DashboardComponent, canActivate: [AuthorizationGuard], children: [
      {
        path: "orden", children: [
          { path: "", component: OrdenTrabajoFormComponent},
          { path: "lista", component: OrdenTrabajoComponent},
          { path: "ver/:id_ot", component: OrdenTrabajoVistaComponent},
          { path: "edit/:id_ot", component: OrdenTrabajoFormComponent},
          { path: "delete/:id_ot", component: OrdenTrabajoComponent}
        ]
      },
      {
        path: 'tarea', children: [
          { path: '', component: TareaFormComponent}
        ]
      },
      {
        path: 'activo', children: [
          { path: '', component: ActivoFormComponent}
        ]
      },
      {
        path: 'edificio', children: [
          { path: '', component: EdificioFormComponent}
        ]
      },
      {
        path: 'piso', children: [
          { path: '', component: PisoFormComponent}
        ]
      },
      {
        path: 'sector', children: [
          { path: '', component: SectorFormComponent},
        ]
      },
      {
        path: 'ubicacion', children: [
          { path: '', component: UbicacionFormComponent }
        ]
      },
      {
        path: 'tipotarea', children: [
          { path: '', component: TipoTareaFormComponent }
        ]
      },
      {
        path: 'usuario', children: [
          { path: '', component: UsuarioFormComponent }
        ]
      }
    ]
  },
  {path: "dashboardOperario", component: DashboardComponent, canActivate: [operarioGuard]},
  { path: "**", redirectTo: "inicio", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
