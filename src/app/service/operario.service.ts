import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperarioService {
  private apiUrl = 'http://localhost:3000/api/operario';

  constructor(private http: HttpClient) {}

  obtenerOperarios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
