import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from './../../services/users-service.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {
  user: any;
  constructor(private usersService: UsersServiceService) { }

  ngOnInit(): void {

    this.usersService.getSingleUser()
      .subscribe(res => {
        this.user = res;
        console.log(res);
      });
  }

}
