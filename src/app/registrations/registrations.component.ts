import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { UnRegisterUser } from '../ngxs/user.actions';
import { User, Registration } from '../ngxs/user.model';
import { UserState } from '../ngxs/user.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrls: ['./registrations.component.scss']
})
export class RegistrationsComponent implements OnInit {

  @Select(UserState.getTotalRegistrations) total$: Observable<number>;
  @Select(UserState.getRegistrations) registrations$: Observable<Registration[]>;

  constructor(private store: Store) { }

  unregister(registration: Registration) {
    this.store.dispatch(new UnRegisterUser(registration));
  }

  ngOnInit() {
  }
}
