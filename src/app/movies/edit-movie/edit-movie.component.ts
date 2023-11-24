import { Component, OnInit } from '@angular/core';
import { movieCreationDTO, movieDTO } from '../movies.model';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  constructor(){}

  model:movieDTO={
    title: 'Spider-Man', inTheaters: true, summary: "Testing for summary",
    releaseDate: new Date(), trailer: 'XYZ', poster: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny42LzEwICBsaW1pdGVkIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00357000-nvpqrqbtpv-portrait.jpg',
    id: 0,
    averageVote: 0,
    userVote: 0
  }
  ngOnInit(): void {
    
  }


  saveChanges(movieCreationDTO:movieCreationDTO){

  }
}
