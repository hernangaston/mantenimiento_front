// src/app/services/edificio.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Edificio } from '../interfaces/edificio';

@Injectable({
  providedIn: 'root'
})
export class EdificioService {
  private apiUrl = 'http://localhost:3000/api/edificio'; 
  
  constructor(private http: HttpClient) {}

  // Método para crear un edificio enviando los datos al backend
  crearEdificio(edificio: Edificio): Observable<Edificio> {
    return this.http.post<Edificio>(this.apiUrl, edificio);
  }

  // Método para obtener todos los edificios (opcional si lo necesitas)
  obtenerEdificios(): Observable<Edificio[]> {
    return this.http.get<Edificio[]>(this.apiUrl);
  }
}
