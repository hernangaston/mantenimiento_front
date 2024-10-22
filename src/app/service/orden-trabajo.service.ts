// src/app/services/orden-trabajo.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrdenTrabajo } from '../interfaces/orden-trabajo';

@Injectable({
  providedIn: 'root'
})
export class OrdenTrabajoService {
  private apiUrl = 'http://localhost:3000/api/orden';

  constructor(private http: HttpClient) {}

  listaOrdenTrabajo(): Observable<OrdenTrabajo[]>{
    return this.http.get<OrdenTrabajo[]>(this.apiUrl);
  }

  crearOrdenTrabajo(orden: OrdenTrabajo): Observable<OrdenTrabajo> {
    return this.http.post<OrdenTrabajo>(this.apiUrl, orden);
  }

  getOrdenDetrabajo(id:any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  updateOrdenTrabajo(id: any, ot: OrdenTrabajo):Observable<OrdenTrabajo> {
    console.log("orden: ", ot);
    return this.http.patch<OrdenTrabajo>(`${this.apiUrl}/${id}`, ot);
  }

  deleteOrdenTrabajo(id: any):Observable<OrdenTrabajo> {
    return this.http.delete<OrdenTrabajo>(`${this.apiUrl}/${id}`);
  }

}
