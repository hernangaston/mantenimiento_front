import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { UsersService } from '../service/users.service';

/**
 * Agrega el token JWT a cada pedido a la API y, si el backend responde 401
 * (token vencido o inválido), cierra la sesión y vuelve al login.
 */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const users = inject(UsersService);
  const router = inject(Router);
  const token = users.getToken();

  const pedido = token
    ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : req;

  return next(pedido).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401 && !req.url.endsWith('/login')) {
        users.deleteToken();
        router.navigate(['login']);
      }
      return throwError(() => error);
    })
  );
};
