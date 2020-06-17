import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviePreview } from '../movie/movie-preview';


const API = 'api/movies/';


@Injectable({ providedIn: 'root' })
export class SearcherService {

  constructor(private http: HttpClient) { }

  searchMovie(identification): Observable<MoviePreview[]> {
    return this.http.get<MoviePreview[]>(API + identification);
  }

}

