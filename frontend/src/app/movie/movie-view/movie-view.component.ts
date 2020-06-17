import { Component, OnInit, Input } from '@angular/core';
import { MoviePreview } from 'src/app/movie/movie-preview';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.scss']
})
export class MovieViewComponent implements OnInit {

  @Input() movie: MoviePreview;

  constructor() { }

  ngOnInit(): void {
  }

}
