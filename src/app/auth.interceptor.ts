import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  if (!req) {
    console.log('req is undefined');
    return next(req);
  }
  const username: string = 'admin';
  const password: string = '1234';
  const authHeader = 'Basic ' + btoa(`${username}:${password}`);
  let cloneReq = req.clone({
    setHeaders: {
      Authorization: authHeader
    }
  });

  return next(cloneReq).pipe(
    catchError(error => {
      console.log(cloneReq,'req');
      return throwError(error);
    })
  );
};