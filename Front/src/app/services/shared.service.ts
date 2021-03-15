import { Injectable } from '@angular/core';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  private online: boolean = true;
  private users: User[] = [];

  isOnline(): boolean { return this.online; }

  setOnline(online: boolean) { this.online = online; }

  addSharedUser(user: User) {
    this.users.push(user);
  }

  getAllSharedUsers(): User[] {
    return this.users;
  }

  getSharedUser(id: any): User {
    const userIndex = this.users.findIndex((user => user.id == id));
    return this.users[userIndex];
  }

  updateSharedUser(id: any, user: User) {
    const userIndex = this.users.findIndex((user => user.id == id));
    this.users[userIndex] = user;
  }

  deleteSharedUser(id: any) {
    this.users = this.users.filter(obj => obj.id !== id);
  }

}