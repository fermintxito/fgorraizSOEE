import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  listUsersOffline: User[] = [
    { id: 1, name: 'Fermin1', age: 35, email: 'fermin1.gorraiz@gmail.com', created: new Date(), password: '1234' },
    { id: 2, name: 'Fermin2', age: 35, email: 'fermin2.gorraiz@gmail.com', created: new Date(), password: '1234' },
    { id: 3, name: 'Fermin3', age: 35, email: 'fermin3.gorraiz@gmail.com', created: new Date(), password: '1234' }
  ];

  listUsers: User[] = [
  ];

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this._userService.getListUsers().subscribe(data => {
      console.log(data);
      this.listUsers = data;
    }, error => {
      console.log(error);
    })
  }

  deleteUser(id: any) {
    console.log(id);
    this._userService.deleteUser(id).subscribe(data => {
      this.getUsers();
    }, error => {
      console.log(error);
    });
  }
}
