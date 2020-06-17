import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MoviePreview } from '../movie/movie-preview';


const API = 'api/movies';

@Injectable({ providedIn: 'root' })
export class HomeListResolver implements Resolve<MoviePreview[]> {

  constructor(private httpClient: HttpClient) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    MoviePreview[] | Observable<MoviePreview[]> | Promise<MoviePreview[]> {
    return this.httpClient.get<MoviePreview[]>(API);
  }
}
