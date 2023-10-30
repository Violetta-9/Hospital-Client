import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddImageToAvatarService {
  private addImage$ = new Subject<string>();
private deleteImage$=new Subject<string>()

  public addImageTrigger = this.addImage$.asObservable();
public deleteImageTrigger=this.deleteImage$.asObservable();
  constructor() { }

  public AddImageToAvatar(image:string){

    this.addImage$.next(image);
  }
  public DeleteAvatar(defaultValue:any){
    this.deleteImage$.next(defaultValue);
  }
}
