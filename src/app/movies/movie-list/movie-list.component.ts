import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  imgURL = "https://i.stack.imgur.com/ATB3o.gif";

  @Input()
  movieList;

  ngOnInit(): void {

  }


  remove(index: number) {
    this.movieList.splice(index,1);
  }



}
