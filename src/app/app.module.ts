import { NgModule, SecurityContext } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';



import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utilities/rating/rating.component';
import { HomeComponent } from './home/home.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { IndexMovieTheatersComponent } from './movie-theaters/index-movie-theaters/index-movie-theaters.component';
import { CreateMovieTheatersComponent } from './movie-theaters/create-movie-theaters/create-movie-theaters.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { EditMovieTheatersComponent } from './movie-theaters/edit-movie-theaters/edit-movie-theaters.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
import { FormGenreComponent } from './genres/form-genre/form-genre.component';
import { MovieFilterComponent } from './movies/movie-filter/movie-filter.component';
import { FormActorComponent } from './actors/form-actor/form-actor.component';
import { InputImgComponent } from './utilities/input-img/input-img.component';
import { InputMarkdownComponent } from './utilities/input-markdown/input-markdown.component';
import { HttpClient } from '@angular/common/http';
import { MovieTheaterFormComponent } from './movie-theaters/movie-theater-form/movie-theater-form.component';
import { MapComponent } from './utilities/map/map.component';
import { FormMovieComponent } from './movies/form-movie/form-movie.component';
import { MultipleSelectorComponent } from './utilities/multiple-selector/multiple-selector.component';

import { ActorsAutocompleteComponent } from './actors/actors-autocomplete/actors-autocomplete.component';
import { DisplayErrorsComponent } from './utilities/display-errors/display-errors.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    GenericListComponent,
    MenuComponent,
    RatingComponent,
    HomeComponent,
    IndexGenresComponent,
    CreateGenreComponent,
    IndexActorsComponent,
    CreateActorComponent,
    IndexMovieTheatersComponent,
    CreateMovieTheatersComponent,
    CreateMovieComponent,
    EditActorComponent,
    EditGenreComponent,
    EditMovieTheatersComponent,
    EditMovieComponent,
    FormGenreComponent,
    MovieFilterComponent,
    FormActorComponent,
    InputImgComponent,
    InputMarkdownComponent,
    MovieTheaterFormComponent,
    MapComponent,
    FormMovieComponent,
    MultipleSelectorComponent,
    
    ActorsAutocompleteComponent,
         DisplayErrorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    LeafletModule,
    HttpClientModule,
    MarkdownModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
