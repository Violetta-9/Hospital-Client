import {Inject, Injectable} from "@angular/core";
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";

export class SearchConditionBase {
  fullName:{
    firstName?: string;
    lastName?: string;
    middleName?: string;
}

  officeId?: number;
  specializationId?: number;
}
@Injectable({ providedIn: "root" })
export class SearchConditionCacheService<TSearchCondition extends SearchConditionBase> {
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
  }
  public isExists(key: string) {
    return this.storage.has(key);
  }
  public getCurrentOrDefaultCondition(key:string):TSearchCondition{
    const  storedFilter:TSearchCondition =this.getFilter(key);
    return storedFilter ? storedFilter : {
      fullName:{
        firstName: "",
        lastName: "",
        middleName: "",
      },
      officeId: 0,
      specializationId: 0,
    } as TSearchCondition;

  }
  public addFilter(key:string,filters:TSearchCondition){
    if(!filters){
      return;
    }
   const storedFilter=this.getCurrentOrDefaultCondition(key);

    for (let [key,value] of Object.entries(filters)){//returns an array of a given object's own enumerable property [key, value] pairs, in the same order as that provided by a for...in loop.
      storedFilter[key]=value;
    }
    this.save(key,storedFilter);
  }
  private save(key:string,sortedList:any){
    this.storage.set(key,sortedList);
  }
  public getFilter(key:string):TSearchCondition{
    return this.storage.get(key);
  }

  public remove(key: string): void {
    this.storage.remove(key);
  }
}
