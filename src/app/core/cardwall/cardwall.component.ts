import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'tmdbc-cardwall',
  templateUrl: './cardwall.component.html',
  styleUrls: ['./cardwall.component.css']
})
export class CardwallComponent implements OnInit {

  movieData:string= "";

  constructor(private tmdb:TmdbService) {
    const movies = this.tmdb.getMovies();
    movies.subscribe({
      next: (data:string) => {
        this.movieData = data;
        console.log(this.movieData);
      },
      error: (err:any) => {
        console.log(err);
      }
    })
  }

  ngOnInit(): void {
  }

}
