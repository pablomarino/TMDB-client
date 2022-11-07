export class Movie {
  private _poster_path: string;
  private _adult: string;
  private _overview: string;
  private _release_date: string;
  private _genre_ids: Array<number>;
  private _id: number;
  private _original_title: string;
  private _original_language: string;
  private _title: string;
  private _backdrop_path: string;
  private _popularity: number;
  private _vote_count: number;
  private _video: boolean;
  private _vote_average: string;


  constructor(
    _poster_path: string,
    _adult: string,
    _overview: string,
    _release_date: string,
    _genre_ids: Array<number>,
    _id: number,
    _original_title: string,
    _original_language: string,
    _title: string,
    _backdrop_path: string,
    _popularity: number,
    _vote_count: number,
    _video: boolean,
    _vote_average: string
  ) {
    this._poster_path = _poster_path;
    this._adult = _adult;
    this._overview = _overview;
    this._release_date = _release_date;
    this._genre_ids = _genre_ids;
    this._id = _id;
    this._original_title = _original_title;
    this._original_language = _original_language;
    this._title = _title;
    this._backdrop_path = _backdrop_path;
    this._popularity = _popularity;
    this._vote_count = _vote_count;
    this._video = _video;
    this._vote_average = _vote_average;
  }

  public get poster_path(): string {
    return this._poster_path;
  }
  public set poster_path(value: string) {
    this._poster_path = value;
  }
  public get adult(): string {
    return this._adult;
  }
  public set adult(value: string) {
    this._adult = value;
  }
  public get overview(): string {
    return this._overview;
  }
  public set overview(value: string) {
    this._overview = value;
  }
  public get release_date(): string {
    return this._release_date;
  }
  public set release_date(value: string) {
    this._release_date = value;
  }
  public get genre_ids(): Array<number> {
    return this._genre_ids;
  }
  public set genre_ids(value: Array<number>) {
    this._genre_ids = value;
  }
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
  public get original_title(): string {
    return this._original_title;
  }
  public set original_title(value: string) {
    this._original_title = value;
  }
  public get original_language(): string {
    return this._original_language;
  }
  public set original_language(value: string) {
    this._original_language = value;
  }
  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }
  public get backdrop_path(): string {
    return this._backdrop_path;
  }
  public set backdrop_path(value: string) {
    this._backdrop_path = value;
  }
  public get popularity(): number {
    return this._popularity;
  }
  public set popularity(value: number) {
    this._popularity = value;
  }
  public get vote_count(): number {
    return this._vote_count;
  }
  public set vote_count(value: number) {
    this._vote_count = value;
  }
  public get video(): boolean {
    return this._video;
  }
  public set video(value: boolean) {
    this._video = value;
  }
  public get vote_average(): string {
    return this._vote_average;
  }
  public set vote_average(value: string) {
    this._vote_average = value;
  }

}
