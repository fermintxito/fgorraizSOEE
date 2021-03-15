import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { SharedService } from 'src/app/services/shared.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-add-or-edit',
  templateUrl: './user-add-or-edit.component.html',
  styleUrls: ['./user-add-or-edit.component.css']
})

export class UserAddOrEditComponent implements OnInit {
  addUser: FormGroup;
  accion = 'Registrar';
  id = 0;
  user: User | undefined;

  @Input() item: string | undefined;

  constructor(private fb: FormBuilder,
    private _userService: UserService,
    private _sharedService: SharedService,
    private router: Router,
    private aRoute: ActivatedRoute) {
    this.addUser = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })

    this.id = +this.aRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.isEdit();
  }

  isEdit() {
    if (this.id !== 0) {
      this.accion = 'Editar';

      if (this._sharedService.isOnline()) {
        this._userService.getUser(this.id).subscribe(data => {
          console.log(data);
          this.user = data;
          this.addUser.patchValue({
            name: data.name,
            age: data.age,
            email: data.email,
            password: data.password
          })
        }, error => {
          console.log(error);
        })
      } else {
        this.user = this._sharedService.getSharedUser(this.id);
        this.addUser.patchValue({
          name: this.user.name,
          age: this.user.age,
          email: this.user.email,
          password: this.user.password
        })
      }
    }
  }

  submit() {
    if (this._sharedService.isOnline()) {
      this.submitOnline();
    } else {
      this.submitOffline();
    }
  }

  submitOnline() {
    console.log(this.addUser);

    //Add new user
    if (this.user == undefined) {
      const user: User = {
        name: this.addUser.get('name')?.value,
        age: this.addUser.get('age')?.value,
        email: this.addUser.get('email')?.value,
        password: this.addUser.get('password')?.value,
        created: new Date
      }

      this._userService.saveUser(user).subscribe(data => {
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
      })

      console.log(user);
    } else {
      //Edit user
      const user: User = {
        id: this.user.id,
        name: this.addUser.get('name')?.value,
        age: this.addUser.get('age')?.value,
        email: this.addUser.get('email')?.value,
        password: this.addUser.get('password')?.value,
        created: this.user.created
      }

      this._userService.updateUser(this.id, user).subscribe(data => {
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
      })
    }
  }

  submitOffline() {
    console.log(this.addUser);

    //Add new user
    if (this.user == undefined) {
      const user: User = {
        name: this.addUser.get('name')?.value,
        age: this.addUser.get('age')?.value,
        email: this.addUser.get('email')?.value,
        password: this.addUser.get('password')?.value,
        created: new Date
      }

      this._sharedService.addSharedUser(user);
      this.router.navigate(['/']);
    } else {
      //Edit user
      const user: User = {
        id: this.user.id,
        name: this.addUser.get('name')?.value,
        age: this.addUser.get('age')?.value,
        email: this.addUser.get('email')?.value,
        password: this.addUser.get('password')?.value,
        created: this.user.created
      }

      this._sharedService.updateSharedUser(this.user.id, user);
      this.router.navigate(['/']);
    }
  }
}
