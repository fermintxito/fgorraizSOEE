import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  user: User | undefined;
  id: number;


  constructor(private aRoute: ActivatedRoute, private _userService: UserService) {
    this.id = +this.aRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this._userService.getUser(this.id).subscribe(data => {
      this.user = data;
    }, error => {
      console.log(error);
    });
  }

}
