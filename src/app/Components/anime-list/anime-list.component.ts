import {Component, OnInit} from '@angular/core';
import {AnimeService} from "../../Services/anime.service";
import {catchError, delay, map, startWith, switchMap} from "rxjs/operators";
import {DataStateEnum} from "../../State/data-state-enum";
import {of} from "rxjs";

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  movieCategorieList?: Array<any>;
  popularMovies?: Array<any>;
  topRatedMovies?: Array<any>;

  currentSize?: number = 0;
  normalSize?: number = 8;

  readonly DataStateEnum=DataStateEnum;
  appState?: DataStateEnum;


  constructor(private animeService: AnimeService) {
  }

  ngOnInit(): void {
    this.getAllMoviesCategories();
    this.getAllPopularMovies();
    this.getTopRatedMovies();
  }

  paginateMovies(data: any) {
    const startIndex = this.currentSize! * this.normalSize!;
    const endIndex = startIndex + this.normalSize!;
    let dataSliced = data.results?.slice(startIndex, endIndex);
    return dataSliced;
  }

  getAllMoviesCategories() {
    this.animeService.getAllMoviesCategories().subscribe(data => {
      this.movieCategorieList = data;
    })
  }

  getAllPopularMovies() {
    this.animeService.getPopularMovies().pipe(
      startWith(this.appState = DataStateEnum.LOADING),
      delay(1500),
      switchMap(data => {
          this.popularMovies = this.paginateMovies(data);
          console.log(this.popularMovies);
          return of(this.appState = DataStateEnum.LOADED);
      }),
      catchError(err=>of(this.appState = DataStateEnum.ERROR))
    ).subscribe(state => {
      // Mise à jour de l'état de l'application ici si nécessaire
      this.appState = state;
    });
  }

  getTopRatedMovies() {
    this.animeService.getTopRatedMovies().subscribe(data => {
      this.topRatedMovies = this.paginateMovies(data);
    })
  }

}
