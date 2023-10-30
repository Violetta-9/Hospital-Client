import {EntityDetailsBaseComponent} from "./entity-detail-base.component";
import {Component} from "@angular/core";
import {SearchConditionBase, SearchConditionCacheService} from "../../services/search-condition-cache-service";
@Component({
  template: ''
})
export abstract class FilterBase<TSearchCondition extends SearchConditionBase> extends EntityDetailsBaseComponent{
constructor( protected searchConditionCacheService: SearchConditionCacheService<TSearchCondition>) {
  super();
}
  protected abstract filterChangedNotifier(): void;
localStorageKey="DOCTOR_FILTER"
  public isFilterExists() {
    return this.searchConditionCacheService.isExists(this.localStorageKey);
  }
  protected override saveInternal(): any {
  this.searchConditionCacheService.remove(this.localStorageKey);
  this.searchConditionCacheService.addFilter(this.localStorageKey,this.detailsForm.getRawValue())
    this.filterChangedNotifier()

  }
  protected getFiltersByKey():TSearchCondition {
    return this.searchConditionCacheService.getCurrentOrDefaultCondition(this.localStorageKey);
  }
  public clearFilters() {
    this.detailsForm.reset(this.getDefaultFormValue());
    this.saveInternal();
  }
  protected getDefaultFormValue(): any {
    return {};
  }



}
