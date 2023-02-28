import {Injectable, Injector} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable, tap} from "rxjs";
import {ToastrService} from "ngx-toastr";

@Injectable({ providedIn: "root" })
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private injector: Injector,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let newRequest = request.clone();

    const token = localStorage.getItem("token");
    if (token) {
      newRequest = request.clone({
        headers: request.headers.set(
          "Authorization",
          "Bearer " + token
        ),
      });
    }

    return next.handle(newRequest).pipe(
      tap(
        {
          error: (err) => {
            if (err.status == 401 || err.status == 403) {
              localStorage.removeItem("token");
              this.router.navigateByUrl("/");
              this.toastr.warning("Срок вашей сессии истек либо у Вас не хватает прав для выполнение данной операции");

            }
          }
        }
      )
    );
  }
}
