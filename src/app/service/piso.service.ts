import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Piso } from '../models/piso';

@Injectable({
  providedIn: 'root'
})
export class PisoService {
  private apiUrl = 'http://localhost:3000/api/piso'; 

  constructor(private http: HttpClient) {}

  crearPiso(piso: Piso): Observable<Piso> {
    return this.http.post<Piso>(this.apiUrl, piso);
  }

  obtenerPisos(): Observable<Piso[]> {
    return this.http.get<Piso[]>(this.apiUrl);
  }
}