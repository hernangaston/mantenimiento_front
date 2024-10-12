import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectorService {
  private apiUrl = 'http://localhost:3000/api/sectores';

  constructor(private http: HttpClient) {}

  // Obtener todos los sectores
  obtenerSectores(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
