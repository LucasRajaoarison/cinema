import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AnimeService} from "../../../Services/anime.service";

@Component({
  selector: 'app-main-reservation-tabs',
  templateUrl: './main-reservation-tabs.component.html',
  styleUrls: ['./main-reservation-tabs.component.css']
})
export class MainReservationTabsComponent implements OnInit {

  moviesId?: number;
  movie: any;
  imageUrl: string = "https://image.tmdb.org/t/p/w500";

  constructor( private activatedRoute: ActivatedRoute,
               private router: Router,
               private animeService: AnimeService) { }

  ngOnInit(): void {
    this.moviesId = +this.activatedRoute.snapshot.params['id'];
    this.getMovieById(this.moviesId);
  }

  getMovieById(id: number) {
    this.animeService.getMovieById(id).subscribe(data => {
      this.movie = data;
      this.imageUrl = this.imageUrl + this.movie?.poster_path;
      console.log(this.imageUrl)
    })
  }


}
