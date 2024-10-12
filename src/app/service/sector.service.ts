import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sector } from '../models/sector';

@Injectable({
  providedIn: 'root'
})
export class SectorService {
  private apiUrl = 'http://localhost:3000/api/sectores';

  constructor(private http: HttpClient) {}

  // Crear un nuevo sector
  crearSector(sector: Sector): Observable<Sector> {
    return this.http.post<Sector>(this.apiUrl, sector);
  }

  // Obtener todos los sectores
  obtenerSectores(): Observable<Sector[]> {
    return this.http.get<Sector[]>(this.apiUrl);
  }
}


