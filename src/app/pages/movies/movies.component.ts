import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { user, IUser } from 'src/mock/users';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  constructor(private userService: UsersService) {}

  users: IUser[] = [];
  // hh = user;
  ngOnInit(): void {
    this.getUsers();

    // console.log(this.user);
  }

  getUsers(): void {
    this.userService.getAllUsers().subscribe((users) => (this.users = users));
  }
}
