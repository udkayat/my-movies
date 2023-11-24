import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { genreCreationDTO } from '../genre.model';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})
export class EditGenreComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private genreService:GenresService) {

  }
  model: genreCreationDTO = { name: 'Drama' };



  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

    });
    
  }
  saveChanges(genreCreationDTO: genreCreationDTO) {

  }
}
