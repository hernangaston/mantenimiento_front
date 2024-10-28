import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Descripcion } from '../interfaces/descripcion';

@Injectable({
  providedIn: 'root'
})

export class DescripcionService {

  private apiUrl = 'http://localhost:3000/api/descripcion';

  constructor(private http: HttpClient) {}

  nuevaDescripcion(descripcion: Descripcion): Observable<Descripcion> {
    return this.http.post<Descripcion>(this.apiUrl, descripcion);
  }

  obtenerListaDescripcion(): Observable<Descripcion[]> {
    return this.http.get<Descripcion[]>(this.apiUrl);
  }

  obtenerDescByTipoTarea(id:any): Observable<Descripcion[]> {
    return this.http.get<Descripcion[]>(`${this.apiUrl}/${id}/tita`);
  }

  obtenerDescByOrden(id: any): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${id}/orden`);
  }
  
}
