import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';

import { TmdbService } from '../tmdb.service';


@Component({
  selector: 'tmdbc-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private tmdb:TmdbService) { }

  ngOnInit(): void {
    this.tmdb.updateMovies();
  }

  searchMovies(searchTerm: string) {
/*
    const image_base_url:String = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
    const query:string = 'https://api.themoviedb.org/3/search/movie?api_key='+environment.api_key+'&query='+searchTerm;

    this.tmdb.queryMovies(searchTerm).subscribe((data:any) => {
      console.log(data);
    });
*/
    this.tmdb.updateMovies(searchTerm);
  }

}
