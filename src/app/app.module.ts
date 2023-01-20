import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HeaderModule} from "./features/header/components/header.module";
import {UserModal} from "./features/user/user.modal";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {registerLocaleData} from "@angular/common";
import localeEn from '@angular/common/locales/en';

registerLocaleData(localeEn, 'en');


@NgModule({
  declarations: [
    AppComponent,



  ],
  imports: [
    BrowserModule,
    HeaderModule,
    UserModal,
    NgbModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      useDefaultLang: true,
      defaultLanguage: "en"
    })


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule  { }
export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http, './assets/locale/', '.json');
}

