import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// NGXS:
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { UserState } from '../app/ngxs/user.state';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationsComponent } from './registrations/registrations.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    RegistrationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([ UserState ]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
