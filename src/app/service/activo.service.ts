import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activo } from '../models/activo';

@Injectable({
  providedIn: 'root'
})
export class ActivoService {

  private apiUrl = 'http://localhost:3000/api/activos';  // Cambia esta URL según tu configuración

  constructor(private http: HttpClient) {}

  // Método para registrar un activo
  crearActivo(activo: Activo): Observable<Activo> {
    return this.http.post<Activo>(this.apiUrl, activo);
  }

  // Método para obtener todos los activos
  obtenerActivos(): Observable<Activo[]> {
    return this.http.get<Activo[]>(this.apiUrl);
  }
}