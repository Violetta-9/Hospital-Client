import { AllOfficesDto, OfficeDto, OfficeService } from '../core/services/swagger-gen/office';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OfficeResolver implements Resolve<OfficeDto> {
  constructor(private readonly officeService: OfficeService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<OfficeDto>|Promise<OfficeDto>|OfficeDto {
    return  this.officeService.getOfficeById(+route.paramMap.get('id'));
  }
}
