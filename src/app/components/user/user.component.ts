import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() userOptions: any;

  constructor() { }

  ngOnInit(): void {
  }

}
