import { Component, OnInit, Input } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input() user: object | any; //declare object from parent

  constructor() {}

  ngOnInit(): void {}
}
