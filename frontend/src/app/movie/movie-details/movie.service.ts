import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


const API = `${environment.api}/api/movies/`;


@Injectable({ providedIn: 'root' })
export class MovieService {

  constructor(private http: HttpClient) { }

  updateMovie(id, movie) {
    return this.http.patch(API + id, movie);
  }

  createMovie(movie) {
    return this.http.post(API, movie);
  }

}

