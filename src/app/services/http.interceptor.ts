import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const clonedRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${localStorage.getItem('shoppingappToken') || ''}`,
      'Content-Type': 'application/json', // Set content type
    },
  });
  console.log("httpInterseptor Request: " , clonedRequest)
  return next(clonedRequest).pipe(
    catchError((error: HttpErrorResponse) => {
      console.log("Error Thrown: ", error);

      return throwError(()=> error);
    })
  );
};
