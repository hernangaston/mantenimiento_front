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

  crearOrdenTrabajo(orden: OrdenTrabajo): Observable<OrdenTrabajo> {
    return this.http.post<OrdenTrabajo>(this.apiUrl, orden);
  }
}
