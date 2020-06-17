import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { SearcherService } from 'src/app/home/searcher.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Person } from 'src/app/person/person';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  consulting: boolean;
  movie: Movie;
  movieForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private service: SearcherService) { }

  ngOnInit(): void {
    this.movie = this.activatedRoute.snapshot.data.movie;
    this.movieForm = this.formBuilder.group({
      name: [this.movie?.name, Validators.required],
      sinopse: [this.movie?.sinopse],
      year: [this.movie?.year, Validators.required],
      imgUrl: ['']
    });
    this.consulting = !!this.movie?.name;
  }

  onSubmit() {}

  addPerson() {
    this.movie.actors.unshift(new Person());
  }

  personRole(person, role) {
    return {...person, role};
  }
}
