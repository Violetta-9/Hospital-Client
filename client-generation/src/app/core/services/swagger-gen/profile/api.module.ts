import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { DoctorService } from './api/doctor.service';
import { PatientService } from './api/patient.service';
import { PhotoService } from './api/photo.service';
import { ReceptionistService } from './api/receptionist.service';
import { StatusService } from './api/status.service';
import { UpdateService } from './api/update.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    DoctorService,
    PatientService,
    PhotoService,
    ReceptionistService,
    StatusService,
    UpdateService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}