import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {

 abc:boolean = false;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  signout(){
    localStorage.clear();
    this.router.navigate(['login']);
  
  }

  disable(){
    this.abc=true;
    console.log("disabled called")
  }
}
