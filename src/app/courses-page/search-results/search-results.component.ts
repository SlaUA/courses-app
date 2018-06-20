import { Component } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {
  searchResults = [
    {
      courseNumber: 1,
      duration: 120,
      creationDate: Date.now()
    },
    {
      courseNumber: 2,
      duration: 86,
      creationDate: Date.now()
    },
    {
      courseNumber: 3,
      duration: 12,
      creationDate: Date.now()
    },
    {
      courseNumber: 4,
      duration: 55,
      creationDate: Date.now()
    }
  ];
}
