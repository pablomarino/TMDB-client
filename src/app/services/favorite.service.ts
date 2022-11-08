import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor() {
  }

  updateFavorite(media_id:number,favorite:boolean,name?:string,poster_path?:string,year?:string):void{
    if(favorite){
      let data:object={
        name: name,
        poster_path: poster_path,
        year:year
      }
      localStorage.setItem(String(media_id), JSON.stringify(data));
    }else{
      localStorage.removeItem(String(media_id));
    }
  }

  getFavorites():Array<object>{
    // Devuelve un array de objetos en el mismo formato que la api de TMDB, TODO: sacar el modelo a un interface
    let _favorites:Array<object>= [];
    for (let i = 0; i < localStorage.length; i++){
      let key = localStorage.key(i);
      let data:Record<string, any>  = JSON.parse(String(localStorage.getItem(String(key))));
      data['id'] = Number(key);
      data['poster_path'] = "/"+data['poster_path'].split('/').pop();
      data['release_date'] = data['year']+ "-01-01";
     _favorites.push(data);
    }
    //console.log(_favorites);
    return _favorites;
  }

  isFavorite(media_id:number):boolean{
    return (localStorage.getItem(String(media_id))!==null);
  }
}

