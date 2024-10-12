import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

import { RegistroComponent } from './components/registro/registro.component';
import { provideHttpClient } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ActivoFormComponent } from './components/activo/activoform/activoform.component';
import { EdificioFormComponent } from './components/edificio/edificio-form/edificio-form.component';
import { OrdenTrabajoComponent } from './components/ordenTrabajo/orden-trabajo/orden-trabajo.component';
import { OrdenTrabajoFormComponent } from './components/ordenTrabajo/orden-trabajo-form/orden-trabajo-form.component';
import { PisoFormComponent } from './components/piso/piso-form/piso-form.component';
import { SectorFormComponent } from './components/sector/sector-form/sector-form.component';
import { TagFormComponent } from './components/tag/tag-form/tag-form.component';
import { TareaFormComponent } from './components/tarea/tarea-form/tarea-form.component';
import { TipoTareaFormComponent } from './components/tipoTarea/tipo-tarea-form/tipo-tarea-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    DashboardComponent,
    InicioComponent,
    ActivoFormComponent,
    EdificioFormComponent,
    OrdenTrabajoComponent,
    OrdenTrabajoFormComponent,
    PisoFormComponent,
    SectorFormComponent,
    TagFormComponent,
    TareaFormComponent,
    TipoTareaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
