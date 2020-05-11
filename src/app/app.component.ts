import { AccountService } from './services/account.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName: string;
  anotherUserName: string;
  isShowName: boolean;
  myContext = { $implicit: 'World', localSk: 'Svet' };
  servers = [];
  oddNumber: number[] = [];
  evenNumber: number[] = [];
  inputValue: string;

  constructor(public accService: AccountService) {
  }
}
