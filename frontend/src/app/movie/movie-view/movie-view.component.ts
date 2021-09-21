import { Component, OnInit, Input } from '@angular/core';
import { MoviePreview } from 'src/app/movie/movie-preview';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.scss']
})
export class MovieViewComponent implements OnInit {

  @Input() movie: MoviePreview;

  API = `${environment.api}/`;

  constructor() { }

  ngOnInit(): void {
  }

}
