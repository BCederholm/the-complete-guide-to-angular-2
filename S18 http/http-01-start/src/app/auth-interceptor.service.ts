import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // if (req.url) // e g want to filter

    const modifiedRequest = req.clone({ headers: req.headers.append('Auth', 'xyz') }); // overwrite url, headers, params and so on

    // return next.handle(req); // you let the request continue its journey, must be explicetly added
    return next.handle(modifiedRequest);
  }

}
