# TmdbClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

## TMDB API

Modify environments/environment.ts or environments/environment.prod.ts to include TMDB API Key.
```ts
export const environment = {
  production: false,
  api_key : 'YOUR API KEY'
};
```

## At a Glance
**Components**
- Core/Header -> Title.
- Core/Nav -> Section navigation and search.
- Core/CardWall -> List of cards.
- Shared/Card -> Movie card with Image, title, year and favorite button.
- Core/Error -> 404 Error page.
- Core/Footer  -> Credits.

**Routing**
- home -> Shows a list of movies with TMDB's discovery API data.
- fav -> Shows a list of movies added to favorites.
- search/:searchterm -> Shows search results for the search term.
- \* -> shows a not found error page.

**Data**
Both section search, favorites and home rely on cardWall component. They differ in the way they obtain the data.
Search and favorites use tmdb.service to obtain data from TMDB API to populate the card components. While favorites section uses favorite.service. 
To store favorites the app makes use of localStorage. The logic for determining what service to use is stored on cardwall component.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
