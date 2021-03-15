import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  img = 'https://www.sistemasoee.com/wp-content/uploads/2018/03/sistemas-oee-logo-m.png';
  isOnline: boolean = true;

  constructor(private _sharedService: SharedService,
              private router: Router) { }

  ngOnInit(): void {
  }

  updateOnline(event: any) {
    this.isOnline = !this.isOnline;
    this._sharedService.setOnline(this.isOnline);
    this.router.navigate(['/']);
  }
}
