import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tag } from '../interfaces/tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  private apiUrl = 'http://localhost:3000/api/tag'; // Cambia la URL según tu backend

  constructor(private http: HttpClient) {}

  // Crear un nuevo tag
  crearTag(tag: Tag): Observable<Tag> {
    return this.http.post<Tag>(this.apiUrl, tag);
  }

  // Obtener todos los tags (opcional)
  obtenerTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.apiUrl);
  }
  
}
