import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../movie';
import { environment } from 'src/environments/environment';


const API = `${environment.api}/'api/movies/`;

@Injectable({ providedIn: 'root' })
export class MovieDetailsResolver implements Resolve<Movie> {

  constructor(private httpClient: HttpClient) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Movie | Observable<Movie> | Promise<Movie> {
    const movieId: string = route.params.id;
    return this.httpClient.get<Movie>(API + movieId);
  }
}
