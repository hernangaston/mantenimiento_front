// src/app/services/tipo-tarea.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoTareaService {
  private apiUrl = 'http://localhost:3000/api/tipos-tarea'; // Cambia la URL según tu backend

  constructor(private http: HttpClient) {}

  // Obtener todos los tipos de tarea
  obtenerTiposTarea(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
