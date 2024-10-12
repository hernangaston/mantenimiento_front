import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {
  private apiUrl = 'http://localhost:3000/api/ubicaciones';

  constructor(private http: HttpClient) {}
  
  obtenerUbicaciones(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
