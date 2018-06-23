import { User, Registration } from './user.model';

export class RegisterUser {
  static readonly type = '[user] register user';
  constructor(public payload: User) {}
}

export class UnRegisterUser {
  static readonly type = '[registration] unregister user';
  constructor(public payload: Registration ) {}
}
