import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  menuItems: Observable<{ item: string; link: string }[]> | any;
  constructor() {}

  ngOnInit(): void {
    this.menuItems = of([
      { item: 'Home', link: '#' },
      { item: 'About', link: '#' },
      { item: 'Contact', link: '#' },
    ]);
  }
}
