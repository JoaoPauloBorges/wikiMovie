import { Component, OnInit, ViewChildren, QueryList, ɵConsole } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Person } from 'src/app/person/person';
import { PersonDetailsComponent } from 'src/app/person/person-details/person-details.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  consulting: boolean;
  movie: Movie;
  movieForm: FormGroup;
  @ViewChildren(PersonDetailsComponent)
  private children: QueryList<PersonDetailsComponent>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private service: MovieService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.movie = this.activatedRoute.snapshot.data.movie;
    this.movieForm = this.formBuilder.group({
      name: [this.movie?.name, Validators.required],
      sinopse: [this.movie?.sinopse],
      year: [this.movie?.year, Validators.required],
      imgUrl: [this.movie?.imgUrl]
    });
    this.consulting = !!this.movie?.name;
  }

  getImgSrc() {
    return this.movieForm.get('imgUrl').value;
  }
  imgListener(body) {
    this.movieForm.get('imgUrl').setValue(body.filename);
    this.movieForm.get('imgUrl').updateValueAndValidity();
  }

  onSubmit() {
    let resp: Observable<any>;
    if (!!this.movie?.id) {
      resp = this.service.updateMovie(this.movie.id, this.movieForm.value);
    } else {
      resp = this.service.createMovie(this.movieForm.value);
    }

    resp.subscribe(res => {
      this.snackBar.open('Successfully submitted', 'x', {
        duration: 2000,
      });
    }, err => {
      console.log(err),
        this.snackBar.open('Something went wrong, reload and try again', 'x', {
          duration: 2000,
        });
    });

    // update cast
    this.children.forEach(ch => {
      ch.onSubmit(this.movie.id);
    });
  }

  addPerson() {
    if(!this.movie.actors) {
      this.movie.actors = [];
    }
    this.movie.actors.unshift(new Person());
  }

  personRole(person, role) {
    return { ...person, role };
  }
}
