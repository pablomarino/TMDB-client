import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { FavoriteService } from 'src/app/services/favorite.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'tmdbc-cardwall',
  templateUrl: './cardwall.component.html',
  styleUrls: ['./cardwall.component.css']
})
export class CardwallComponent implements OnInit {

  movieData:Array<object>= [];

  constructor(private tmdb:TmdbService, private route:ActivatedRoute,private router: Router, private favorite:FavoriteService) {

    if(this.router.url=="/fav"){
      // Utilizo favoriteService para obtener las peliculas en la seccion Favoritos
      this.movieData = favorite.getFavorites();
    }else{
      // Utilizo TmdbService para obtener las peliculas de la api en la seccion Home y Search
      const movies = this.tmdb.getMovies();
      movies.subscribe({
        next: (data:Array<object>) => {
          this.movieData = data;
        },
        error: (err:any) => {
          console.log(err);
        }
      })
    }
    //console.log(this.movieData);
  }

  ngOnInit(): void {
    // Solo se permiten parametros en la ruta de search, si hay parametros en la url, se ejecuta la busqueda.
    this.route.params.subscribe((params:any) => {
      this.tmdb.updateMovies(params.searchterm);
    } );
  }

}
