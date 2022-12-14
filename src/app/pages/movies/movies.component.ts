import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  genreId: string | null = null;
  searchValue: string | null = null;
  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.searchValue = 'hello';
    // this.moviesService
    //   .getMovies('popular', 20)
    //   .subscribe((movies) => (this.movies = movies));
    this.route.params.pipe(take(1)).subscribe(({ genreId }) => {
      if (genreId) {
        this.genreId = genreId;
        this.getMoviesByGenre(genreId, 1);
      } else {
        this.getPagedMovies(1);
      }
    });
  }

  getPagedMovies(page: number, searchKeyword?: string) {
    this.moviesService.searchMovies(page, searchKeyword).subscribe((movies) => {
      this.movies =
        movies; /*this.movies assign for me returned back movie from the subscribe or from the callback*/
    });
  }

  getMoviesByGenre(genreId: string, page: number) {
    this.moviesService.getMoviesByGenre(genreId, page).subscribe((movies) => {
      this.movies = movies;
    });
  }

  paginate(event: any) {
    const pageNumber = event.page + 1;

    if (this.genreId) {
      this.getMoviesByGenre(this.genreId, pageNumber);
    } else {
      if (this.searchValue) {
        this.getPagedMovies(pageNumber, this.searchValue);
      } else {
        this.getPagedMovies(pageNumber);
      }
    }
    // console.log(event);
  }

  searchChanged() {
    if (this.searchValue) {
      this.getPagedMovies(1, this.searchValue);
    }
    console.log(this.searchValue);
  }
}
