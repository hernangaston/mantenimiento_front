// src/app/services/tipo-tarea.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoTarea } from '../models/tipo-tarea';

@Injectable({
  providedIn: 'root'
})
export class TipoTareaService {
  private apiUrl = 'http://localhost:3000/api/tipoTarea'; // Cambia la URL según tu backend

  constructor(private http: HttpClient) {}

  // Crear un nuevo tipo de tarea
  crearTipoTarea(tipoTarea: TipoTarea): Observable<TipoTarea> {
    return this.http.post<TipoTarea>(this.apiUrl, tipoTarea);
  }


  // Obtener todos los tipos de tarea
  obtenerTiposTarea(): Observable<TipoTarea[]> {
    return this.http.get<TipoTarea[]>(this.apiUrl);
  }
}
