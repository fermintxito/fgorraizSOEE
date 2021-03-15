import { Component, OnInit } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Front';

  constructor(private _sharedService: SharedService) { }

  ngOnInit() {
    this._sharedService.addSharedUser({ id: 1, name: 'Fermin1', age: 35, email: 'fermin1.gorraiz@gmail.com', created: new Date(), password: '1234' });
    this._sharedService.addSharedUser({ id: 2, name: 'Fermin2', age: 35, email: 'fermin2.gorraiz@gmail.com', created: new Date(), password: '1234' });
    this._sharedService.addSharedUser({ id: 3, name: 'Fermin3', age: 35, email: 'fermin3.gorraiz@gmail.com', created: new Date(), password: '1234' });
  }

}
