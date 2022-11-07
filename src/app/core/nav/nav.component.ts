import { Component, OnInit } from '@angular/core';

import { Router} from '@angular/router';


@Component({
  selector: 'tmdbc-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  gotoSearch(searchTerm: string) {
    this.router.navigate(['search/'+searchTerm]);
  }

}
