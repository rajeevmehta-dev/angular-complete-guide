import { AccountService } from './services/account.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, ControlContainer } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userName: string;
  anotherUserName: string;
  isShowName: boolean;
  myContext = { $implicit: 'World', localSk: 'Svet' };
  servers = [];
  oddNumber: number[] = [];
  evenNumber: number[] = [];
  inputValue: string;
  courses = ['Advance', 'Intermediator', 'Basic'];
  initialCourse = 'Advance';
  myForm = new FormGroup({
    ProjectName: new FormControl(null, [Validators.required, this.customFirst.bind(this)]),
    Email: new FormControl(null, [Validators.required, Validators.email], this.emailAlreadyExist),
    ProjectStatus: new FormControl('')
  });
  status = ['Good', 'Critical', 'Best', 'Average'];
  constructor(public accService: AccountService) {

  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.myForm.value);
  }

  customFirst(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'testing') {
      return { isValueSame: true };
    } else {
      return null;
    }
  }

  emailAlreadyExist(control: FormControl): Promise<any> | Observable<any> {
    const myPromise = new Promise((resolved, reject) => {
      setTimeout(() => {
        if (control.value === 'rajeev@acmeminds.com') {
          resolved({alreadyExists : true});
        } else {
          resolved(null);
        }
      }, 1000);
    });
    return myPromise;
  }
}
