import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { $ } from 'protractor';

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
  able(){
    // $('#btn').dblclick()
    console.log("able is called");
  }
  isSingleClick: Boolean = true;     

  method1(){
     this.isSingleClick = true;
          setTimeout(()=>{
              if(this.isSingleClick){
                 alert('hi piyush')
              }
           },250)
  }
  method2(){
           this.isSingleClick = false;
           console.log("method 2 is called")
           alert("you have clicked twice")
  }
}
