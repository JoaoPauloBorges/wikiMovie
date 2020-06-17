import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../movie/movie';


const API = 'api/movies/';
interface Result {
  name: string;
  sinopse: string;
  year: Date;
}

@Injectable({ providedIn: 'root' })
export class SearcherService {

  constructor(private http: HttpClient) { }

  searchMovieByName(identification): Observable<Result[]> {
    return this.http.get<Result[]>(API);
  }

  fetchMovieDetails(id): Observable<Movie> {
    return this.http.get<Movie>(API + id);
  }

}

