import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-anime-item',
  templateUrl: './anime-item.component.html',
  styleUrls: ['./anime-item.component.css']
})
export class AnimeItemComponent implements OnInit {

   @Input() movie: any;

   imageUrl: string = "https://image.tmdb.org/t/p/w500";



  constructor() { }

  ngOnInit(): void {
    this.imageUrl = this.imageUrl + this.movie?.poster_path;
  }

}
