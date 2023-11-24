import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {

  }

  form: FormGroup;

  genres = [
    { id: 1, name: 'Drama' },
    { id: 2, name: 'Comedy' }
  ];

  movies = [
    { title: 'Spider-Man', poster: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4zLzEwICAzNC42SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00310794-nmwukaluxy-portrait.jpg' },
    { title: 'Moana', poster: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny43LzEwICA0LjdLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00118776-mywkpmneqt-portrait.jpg' },
    { title: 'Inception', poster: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAyNSBNYXkgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00332998-srerbbxbyd-portrait.jpg' },
  ];

  originalMovies = this.movies;

  initialFormValues: any;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      genreId: 0,
      upcomingReleases: false,
      inTheaters: false

    });
    this.initialFormValues = this.form.value;
    this.form.valueChanges.subscribe(values => {
      this.movies = this.originalMovies;
      this.filterMovies(values);
    });

  }
  filterMovies(values: any) {
    if (values.title) {
      this.movies = this.movies.filter(movie => movie.title.indexOf(values.title) !== -1);
    }
  }
  clearForm() {
    this.form.patchValue(this.initialFormValues);
  }

}
