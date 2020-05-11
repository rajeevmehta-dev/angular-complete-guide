import { AccountService } from './../services/account.service';
import { Component, OnInit, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @Input() activeUsers: string[] = [];
  gameInterval: any;
  lastNumber = 0;
  constructor(public acctService : AccountService) { }

  ngOnInit() {
    const check = this.acctService.addToActiveEmit.subscribe((item) => {
      console.log(item);
      console.log(check);
    });

  }
}
