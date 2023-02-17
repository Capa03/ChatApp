import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  pageTitle: string = "Test";
  private _searchFilter: string = "";

  get searchFilter(): string {
    return this._searchFilter
}

set searchFilter(value: string){
    this._searchFilter = value;
    
}
}
