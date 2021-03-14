import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  img = 'https://www.sistemasoee.com/wp-content/uploads/2018/03/sistemas-oee-logo-m.png';

  constructor() { }

  ngOnInit(): void {
  }

}
