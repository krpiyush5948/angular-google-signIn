import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoogleSignInComponent } from './google-sign-in/google-sign-in.component';


const routes: Routes = [
  {path: 'signin', component: GoogleSignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
