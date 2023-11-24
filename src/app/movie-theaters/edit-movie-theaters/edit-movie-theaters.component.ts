import { Component, OnInit } from '@angular/core';
import { movieTheatersCreationDTO, movieTheatersDTO } from '../movie-theaters.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-movie-theaters',
  templateUrl: './edit-movie-theaters.component.html',
  styleUrls: ['./edit-movie-theaters.component.css']
})
export class EditMovieTheatersComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {

  }
  model: movieTheatersDTO = { name: 'Agora', latitude: 29.713788983065687, longitude: 75.90282440185548 };
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

    });
  }

  saveChanges(movieTheatersCreationDTO: movieTheatersCreationDTO) {
    console.log(movieTheatersCreationDTO);
  }

}
