import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  private _movies:BehaviorSubject<any> = new BehaviorSubject<any>("");

  constructor(private http:HttpClient) { }

  private baseUrl:string = 'https://api.themoviedb.org/3/';
  private trendingUrl:string = this.baseUrl+'trending/all/week?api_key='+environment.api_key;
  private searchUrl:string = this.baseUrl+'search/movie?api_key='+environment.api_key+'&query=';

  getMovies():Observable<any> {
    return this._movies.asObservable();
  }

  updateMovies(searchTerm?:string){
    if(String(searchTerm) !=='undefined' && searchTerm !== '') {
      this.http.get<any>(this.searchUrl+searchTerm).subscribe({
        next: (data:any) => {
          this._movies.next(data.results);
        },
        error: (err:any) => {
          console.log(err);
        }
      });
    }else{
      this.http.get<any>(this.trendingUrl).subscribe({
        next: (data:any) => {
          this._movies.next(data.results);
        },
        error: (err:any) => {
          console.log(err);
        }
      });
    }
  }

}
