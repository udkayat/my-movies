import { Component, OnInit } from '@angular/core';
import { movieTheatersCreationDTO } from '../movie-theaters.model';

@Component({
  selector: 'app-create-movie-theaters',
  templateUrl: './create-movie-theaters.component.html',
  styleUrls: ['./create-movie-theaters.component.css']
})
export class CreateMovieTheatersComponent implements OnInit {
  constructor() {

  }
  ngOnInit(): void {

  }



  saveChanges(form: movieTheatersCreationDTO) {
    console.log(form);
  }
}
