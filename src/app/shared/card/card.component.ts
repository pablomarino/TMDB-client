import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tmdbc-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() data:Object = {};
  name:string = '';
  image:string = '';
  year:string = '';
  constructor() { }

  ngOnInit(): void {
    /*
    console.log(Object.keys(this.data)[5],Object.values(this.data)[5]);
    this.name = Object.values(this.data)[5];
    this.image = "https://www.themoviedb.org/t/p/w220_and_h330_face"+Object.values(this.data)[7];
    this.year = Object.values(this.data)[11];
    */

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
  }


  favMovie(movie: string, isFav: boolean) {
    console.log(movie, isFav);
  }
}
