import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { RegisterUser } from '../ngxs/user.actions';
import { User } from '../ngxs/user.model';
import { UserState } from '../ngxs/user.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {


  @Select(UserState.getUnregisteredUsers) users$: Observable<User[]>;

  constructor(private store: Store) {
  }

  registerUser(user: User) {
    this.store.dispatch(new RegisterUser(user));
  }

  ngOnInit() {
  }

}
