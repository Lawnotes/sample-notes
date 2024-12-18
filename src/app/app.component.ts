import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'law-notes';
  cardData: any[] = [];
  searchQuery: string = ''; // Store the search query

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('assets/card-data.json').subscribe(data => {
      this.cardData = data;
    });
  }
}
