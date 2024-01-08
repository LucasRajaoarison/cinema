import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private  apiKey: string = "78b96696b77ba2853c7973fe1123a677";

  private baseUrl: string = "https://api.themoviedb.org/3";

  constructor(private httpClient: HttpClient) { }

  getAllMoviesCategories = () => {
    const url =  `${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}` ;
    console.log(url);
    return this.httpClient.get<any>(url);
  }

  getPopularMovies() {
    const url =  `${this.baseUrl}/movie/popular?api_key=${this.apiKey}` ;
    return this.httpClient.get<any>(url);
  }

  getTopRatedMovies() {
    const url =  `${this.baseUrl}/movie/top_rated?api_key=${this.apiKey}` ;
    return this.httpClient.get<any>(url);
  }


  getMovieById(id: number) {
    const url =  `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}` ;
    return this.httpClient.get<any>(url);
  }
}
