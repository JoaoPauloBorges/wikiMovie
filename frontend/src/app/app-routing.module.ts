import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeListResolver } from './home/home.resolver';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';
import { MovieDetailsResolver } from './movie/movie-details/movie-details.resolver';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {animation: 'landing'},
    resolve: {
      movies: HomeListResolver,
    },
    pathMatch: 'full'
  },
  {
    path: 'consult/:id',
    component: MovieDetailsComponent,
    resolve: {
      movie: MovieDetailsResolver,
    },
  },
  {
    path: 'register',
    component: MovieDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
