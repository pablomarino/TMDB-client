import { Component} from '@angular/core';

import { Router} from '@angular/router';


@Component({
  selector: 'tmdbc-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent{

  constructor( private router:Router) { }


  gotoSearch(searchTerm: string) {
    this.router.navigate(['search/'+searchTerm]);
  }

}
