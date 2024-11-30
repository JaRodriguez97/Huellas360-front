import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.backend + 'users/'; // Reemplaza con tu endpoint real
  constructor(private http: HttpClient) {}

  login(email: string, password: string, remember: boolean): Observable<any> {
    // Aquí harías la solicitud HTTP para autenticar al usuario.
    return this.http.post<any>(this.apiUrl + 'login', {
      email,
      password,
      remember,
    });
  }
}
