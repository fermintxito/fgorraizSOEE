import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { SharedService } from 'src/app/services/shared.service';
import { UserService } from 'src/app/services/user.service';
import { __await } from 'tslib';

@Component({
  selector: 'app-user-log-in',
  templateUrl: './user-log-in.component.html',
  styleUrls: ['./user-log-in.component.css']
})
export class UserLogInComponent implements OnInit {
  logInUser: FormGroup;
  user: User | undefined;
  notUser: boolean | undefined;

  constructor(private fb: FormBuilder,
    private _userService: UserService,
    private _sharedService: SharedService,
    private router: Router) {
    this.logInUser = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  submit() {
    if (this._sharedService.isOnline()) {
      this.loadUserOnline();
    } else {
      this.loadUserOffline();
    }

    if (this.user != undefined && this.user.password === this.logInUser.get('password')?.value) {
      this.notUser = false;
      this.router.navigate(['/list'])
    } else {
      this.notUser = true;
    }
  }

  loadUserOnline() {
    this._userService.getUserByEmail(this.logInUser.get('email')?.value).subscribe(data => {
      this.user = data
    }, error => {
      console.log(error)
    });
  }

  loadUserOffline() {
    this.user = this._sharedService.getSharedUserByEmail(this.logInUser.get('email')?.value);
  }

}
