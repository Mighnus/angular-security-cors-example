import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private http: HttpClient) { }
  ingredients;

  ngOnInit() {
    this.http.get('http://localhost:8080/ingredients')
        .subscribe((data) => this.displayIngredients(data));
  }

  displayIngredients(data): void {
    this.ingredients = data;
  }
}
