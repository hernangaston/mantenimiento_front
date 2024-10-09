import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthorizationGuard } from './guards/authorization.guard';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "registro", component: RegistroComponent},
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthorizationGuard]},
  { path: "**", redirectTo: "/login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
