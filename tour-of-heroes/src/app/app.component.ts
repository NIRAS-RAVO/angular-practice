import {
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, DoCheck, OnDestroy, AfterViewInit {
  title = 'Practicing'; // interpolation
  isDisabled = false;
  //Dummy data - OBJECT
  user1 = {
    firstName: 'Rachel',
    lastName: 'Vo',
    image: 'assets/profile.PNG',
  };

  users:
    | Observable<{ firstName: string; lastName: string; dateOfBirth: number }[]>
    | any; // Or just users: any;

  constructor() {}

  handleClick() {
    this.isDisabled = !this.isDisabled;
  }

  ngOnInit(): void {
    this.users = of([
      {
        firstName: 'A',
        lastName: 'AA',
        dateOfBirth: 1990,
      },
      {
        firstName: 'B',
        lastName: 'BB',
        dateOfBirth: 1991,
      },
    ]);

    // this._dataService.getUsers().subscribe((user) => (this.users = user));
  }

  ngOnDestroy() {
    // any teardown for your component
    // unsubscribe from an Observable to prevent memory leaks & performance issues
  }
  ngAfterViewInit() {
    // child views inside a component
  }
  ngDoCheck() {
    // detect changes
    // useful for debugging
    console.log('detect changes');
  }
}
