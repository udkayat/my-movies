import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenresService } from '../genres.service';
import { genreDTO } from '../genre.model';

@Component({
  selector: 'app-index-genres',
  templateUrl: './index-genres.component.html',
  styleUrls: ['./index-genres.component.css']
})
export class IndexGenresComponent implements OnInit {

genres:genreDTO[];
columnsToDisplay = ['id', 'name', 'actions'];

  constructor(private router: Router, private genreService: GenresService) {

  }
  ngOnInit(): void {
     this.genreService.getAll().subscribe(result => {
      this.genres=result;
      console.log(result);
      
    })
  }




}
