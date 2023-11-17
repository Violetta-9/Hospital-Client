import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import {HeaderComponent} from "./header/header.component";
import {NgbDropdownModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {LoginModalComponent} from "../../user/modals/login-modal/login-modal.component";
import {MatInputModule} from "@angular/material/input";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { CommonModule, registerLocaleData } from "@angular/common";
import localeEn from "@angular/common/locales/en";

registerLocaleData(localeEn, 'en');


@NgModule({
  declarations: [
    HeaderComponent,

  ],
    imports: [
        RouterModule,
        HttpClientModule,
        NgbModule,
        TranslateModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
            useDefaultLang: true,
            defaultLanguage: "en"
        }),
        CommonModule


    ],
  exports: [
    HeaderComponent,
  ],
})
export class HeaderModule {}
export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http, './assets/locale/', '.json');
}
