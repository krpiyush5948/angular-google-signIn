import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GoogleSignInComponent } from './google-sign-in/google-sign-in.component';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from 'angular4-social-login';
import { RouterModule, Routes } from '@angular/router';
import { SignoutComponent } from './signout/signout.component';


const google_oauth_client_id:string = '206662548839-srktnk0qakt9j1csut960egel7fmsmo2.apps.googleusercontent.com';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(google_oauth_client_id)
  }
]);

const appRoute: Routes = [
  
  {path: 'login', component: GoogleSignInComponent},
  {path:'logout',component:SignoutComponent}
];

@NgModule({
  declarations: [
    AppComponent,

    GoogleSignInComponent,

    SignoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule.initialize(config),
    RouterModule.forRoot(appRoute),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
