import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {ToastrService} from "ngx-toastr";
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {
  }

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //any alteration in httpRequest can be done here
    return next.handle(httpRequest).pipe(
      catchError((requestError: HttpErrorResponse) => {
        console.log(`Status code from service ${requestError.status}`)
        this.handleError(requestError);
        throw requestError;
      })
    );

  }

  private handleError(requestError: HttpErrorResponse) {
    console.log((requestError));
    if (this.isProblemDetails(requestError.error)) {
      const title = this.getTitleOfError(requestError);
      const details = requestError.error.detail;
      const status = requestError.error.status;
      if (title != ' ') {
        this.toastr.error(details, title);
      }
    }
  }

  private isProblemDetails(err: any): boolean {
    return err.hasOwnProperty("type") && err.hasOwnProperty("status") && err.hasOwnProperty("title");
  }

  private getTitleOfError(err: HttpErrorResponse): string {
    switch (err.error.status) {
      case 400: {
        return "Неверный запрос";
      }
      default:
        return "Ошибка";
    }
  }
}
