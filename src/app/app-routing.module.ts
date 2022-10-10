import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { GenresComponent } from './pages/genres/genres.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
import { TvShowComponent } from '../app/pages/tvShow/tvShow.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/genres/:genreId', component: MoviesComponent },
  { path: 'tvshows', component: TvShowsComponent },
  { path: 'tvShow', component: TvShowComponent },
  { path: 'tvshows/genres/:genreId', component: TvShowsComponent },
  { path: 'genres', component: GenresComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: '**', redirectTo: '' }, //This path is to deriect to home component if any path does not exist instead of creating a 404 component and this path has to be mentioned at the end of the path.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
