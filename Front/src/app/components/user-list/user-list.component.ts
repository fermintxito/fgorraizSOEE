import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { SharedService } from 'src/app/services/shared.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input('data') isOnline: any;
  listUsers: User[] = [];

  constructor(private _sharedService: SharedService, private _userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    if (this._sharedService.isOnline()) {
      this._userService.getListUsers().subscribe(data => {
        console.log(data);
        this.listUsers = data;
      }, error => {
        console.log(error);
      })
    } else {
      this.listUsers = this._sharedService.getAllSharedUsers();
    }
  }

  deleteUser(id: any) {
    if (this._sharedService.isOnline()) {
      console.log(id);
      this._userService.deleteUser(id).subscribe(data => {
        this.getUsers();
      }, error => {
        console.log(error);
      });
    } else {
      this._sharedService.deleteSharedUser(id);
    }
  }
}
