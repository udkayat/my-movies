import { Injectable, OnInit } from '@angular/core';
import { genreCreationDTO, genreDTO } from './genre.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GenresService implements OnInit {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + '/genres';

  ngOnInit(): void {
    console.log(this.apiURL);
  }

  getAll(): Observable<genreDTO[]> {
    console.log(this.apiURL);
    return this.http.get<genreDTO[]>(this.apiURL);
  }
  getById(id: number): Observable<genreDTO> {
    return this.http.get<genreDTO>(`${this.apiURL}/${id}`);
  }
  create(genre: genreCreationDTO) {
    return this.http.post(this.apiURL, genre);
  }
}
