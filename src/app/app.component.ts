import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {



  ngOnInit(): void {

  }
  title = 'my-movies';


  movies: any;


  onRating(rate: number) {
    alert(rate);
  }
}
