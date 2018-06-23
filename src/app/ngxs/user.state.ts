
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { RegisterUser, UnRegisterUser} from './user.actions';
import { User, Registration } from './user.model';

export interface UserStateModel {
  registrations: Registration[];
  users: User[];
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    registrations: [],
    users: [
      {id: 1, name: 'Max', registered: false},
      {id: 2, name: 'Anna', registered: false},
      {id: 3, name: 'Chris', registered: false},
      {id: 4, name: 'Sven', registered: false}
    ]
  }
})
export class UserState {

  @Selector()
  static getUsers(state: UserStateModel) {
    return state.users;
  }

  @Selector()
  static getUnregisteredUsers(state: UserStateModel) {
    return state.users.filter( user =>  !user.registered );
  }

  @Selector()
  static getRegistrations(state: UserStateModel) {
    return state.registrations;
  }

  @Selector()
  static getTotalRegistrations(state: UserStateModel) {
    return state.registrations.length;
  }

  @Action(RegisterUser)
  registerUser({getState, patchState }: StateContext<UserStateModel>, { payload }: RegisterUser) {
    const state = getState();
    const date = new Date();

    const user: User = state.users.find(stateUser => stateUser.id === payload.id );

    user.registered = true;

    const registered: Registration = {
      userId: user.id,
      name: user.name,
      date: date.getMonth() + '/' + date.getDay()
    };

    patchState({
      registrations: [ ...state.registrations, registered]
    });
  }

  @Action(UnRegisterUser)
  unRegisterUser({getState, patchState }: StateContext<UserStateModel>, { payload }: UnRegisterUser) {
    const state = getState();
    const user = state.users.find(registerd => registerd.id === payload.userId);
    user.registered = false;

    patchState({
      registrations: getState().registrations.filter(a => a.userId !== payload.userId)
    });

  }
}
