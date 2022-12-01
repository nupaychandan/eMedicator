import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   
    const apiKey='Steve'
    request=request.clone({
      setHeaders:{
        apiKey: apiKey,
      }
    })
    console.log("****test");
   console.log(request);
    return next.handle(request);
  }
}
