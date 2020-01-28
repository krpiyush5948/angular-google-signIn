import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angular4-social-login';
import { Router } from '@angular/router';


@Component({
  selector: 'app-google-sign-in',
  templateUrl: './google-sign-in.component.html',
  styleUrls: ['./google-sign-in.component.css']
})
export class GoogleSignInComponent implements OnInit {

  user: Object;
  isLoggedIn: Boolean = false;
  
  title = 'web-app';
  isClicked: Boolean = false;

  ngOnInit(){
    // var loggedIn = this.userService.isLoggedInUser();
    // if(loggedIn != 0){
    //   var key = localStorage.key(0);
    //   this.user = JSON.parse(localStorage.getItem(key));
      this.isLoggedIn = true;
      // this.router.navigate(['/home']);
    }
    // console.log(this.user+' '+ key1 + '  '+typeof localStorage.getItem(key1))

    constructor( private _socioAuthServ: AuthService, private router: Router){

    }
  

  login(){
    this.isClicked = true;
    // this.router.navigate(['/home']);
   console.log('login is called')
  }

  signIn(platform : string): void {
    platform = GoogleLoginProvider.PROVIDER_ID;
    this._socioAuthServ.signIn(platform).then(
      (response) => {
        console.log(platform + " logged in user data is= " , response);
        this.login();
        this.user = {
          email: response.email,
          name: response.name,
          photoUrl: response.photoUrl
        }
        this.router.navigate(['/logout'])
        localStorage.setItem('email', this.user['email']);
      },
   
    );
  }

  signOut(platform: string){

    this._socioAuthServ.signOut().then(() => {
      console.log("Signed out");
      
    })
    
  }

}
