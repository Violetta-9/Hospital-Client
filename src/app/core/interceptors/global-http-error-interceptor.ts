import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {Injectable} from "@angular/core";
import { AlertService } from '../../services/alert-service.service';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private alertService: AlertService) {
  }

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //any alteration in httpRequest can be done here
    return next.handle(httpRequest).pipe(
      catchError((requestError: HttpErrorResponse) => {
        //console.log(`Status code from service ${requestError.status}`)
        this.handleError(requestError);
        throw requestError;
      })
    );

  }

  private handleError(requestError: HttpErrorResponse) {
    if (this.isProblemDetails(requestError.error)) {
      const title = this.getTitleOfError(requestError);
      const details = requestError.error.detail;
      const status = requestError.error.status;
      if (title != ' ') {
        this.alertService.showGlobalError(details, title);
      }
    }
  }

  private isProblemDetails(err: any): boolean {
    return err.hasOwnProperty("type") && err.hasOwnProperty("status") || err.hasOwnProperty("detail") || err.hasOwnProperty("title");
  }

  private getTitleOfError(err: HttpErrorResponse): string {
    switch (err.error.status) {
      case 400: {
        return "Bad request";
      }
      default:
        return "Error";
    }
  }
}
