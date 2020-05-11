import { AccountService } from './../services/account.service';
import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.scss']
})
export class OddComponent implements OnInit {
  @Input() inActiveUsers: string[] = [];
  constructor(public acctService: AccountService) { }

  ngOnInit() {
  }

}
