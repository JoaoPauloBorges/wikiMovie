import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';
import { SearcherService } from './searcher.service';
import { ActivatedRoute } from '@angular/router';
import { MoviePreview } from '../movie/movie-preview';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  resultList: MoviePreview[];
  searchForm: FormGroup;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(['(max-width: 650px)'])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor(
    private breakpointObserver: BreakpointObserver,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private service: SearcherService) { }

  ngOnInit(): void {
    this.resultList = this.activatedRoute.snapshot.data.movies;
    this.searchForm = this.formBuilder.group({
      queryInput: [''],
    });
  }

  search() {
    const query = this.searchForm.get('queryInput').value;

    this.service.searchMovie(query).subscribe(movie => {
      this.resultList = movie;
    });

  }

}
