import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


const API = `${environment.api}/api/movies/`;


@Injectable({ providedIn: 'root' })
export class PersonService {

  constructor(private http: HttpClient) { }

  associatePersonMovie(movieId, person) {
    const role = person.role;
    delete person.role;
    delete person.imgUrl; // ainda n esta sendo usado
    console.log(person);
    return this.http.post(API + movieId + '/' + role, person);
  }

}

