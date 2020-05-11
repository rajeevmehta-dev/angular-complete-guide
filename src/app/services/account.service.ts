import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  activeCount : number;
  inActiveCount : number;
  activeUsers: string[] = ['Rajeev', 'Raju'];
  inActiveUsers: string[] = ['Anup', 'Kaku', 'Diya'];
  addToActiveEmit = new EventEmitter<string>();
  constructor() { }

  addToActive = (index: number): void => {
    this.activeUsers.push(this.inActiveUsers[index]);
    this.inActiveUsers.splice(index, 1);
    this.addToActiveEmit.emit(this.inActiveUsers[index]);
  }
  addToInActive = (index: number): void => {
    this.inActiveUsers.push(this.activeUsers[index]);
    this.activeUsers.splice(index, 1);
  }
}
