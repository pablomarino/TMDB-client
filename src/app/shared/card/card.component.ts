import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { FavoriteService } from '../../services/favorite.service';

@Component({
  selector: 'tmdbc-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() data:Object = {};

  id:number = 0;
  name:string = '';
  image:string = '';
  year:string = '';
  fav:boolean = false;

  class:string = '';


  constructor(private favorite:FavoriteService) { }

  ngOnInit(): void {
    let data = Object(this.data);

    if(data['title']) {
      this.name = data['title'];
    } else if(data['name']) {
      this.name = data['name'];
    }
    if(data['poster_path']) {
      this.image = "https://www.themoviedb.org/t/p/w220_and_h330_face"+data['poster_path'];
    }else if(data['profile_path']){
      this.image = "https://www.themoviedb.org/t/p/w220_and_h330_face"+data['backdrop_path'];
    }else{
      this.image = "assets/noimage.png"
    }

    if(data['first_air_date']) {
      this.year = data['first_air_date'].split('-')[0];
    } else if(data['release_date']) {
      this.year = data['release_date'].split('-')[0];
    }

    this.id = data['id'];

    this.fav = this.favorite.isFavorite(data['id']);

    if(this.fav){
      this.class = 'add';
    }else{
      this.class = 'remove';
    }
  }


updateFavorite(id: any, name?: string, image?: any, year?: string) {
    console.log(id, this.fav, name, image, year)
    if(this.fav){
      this.class = 'add';
    }else{
      this.class = 'remove';
    }
    this.favorite.updateFavorite(id, this.fav, name, image, year);
  }
}
