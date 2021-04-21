import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponseToken } from '../interfaces/responses';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(usuario: Usuario): Observable<void>{
    return this.http.post<ResponseToken>('auth/login', usuario).pipe(
      map(resp=> {
        localStorage.setItem('token', resp.accessToken)
      })
    );

  }

  register(usuario: Usuario): Observable<void>{
    return this.http.post<void>('auth/register', usuario);
  }

}
