import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DeletePersonService {
  private deletePerson$ = new Subject<boolean>();


  public deletePersonTrigger = this.deletePerson$.asObservable();

  constructor() { }

  public DeletePerson(value:boolean){

    this.deletePerson$.next(value);
  }

}
