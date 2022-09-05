import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SplashAnimationType } from 'src/app/enum/splash-animation-type';
import { UserTestService } from 'src/app/services/tests-services/user-test.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username : string = '';
  password : string = '';

  constructor(private router:Router, private testUserService:UserTestService) { }

  ngOnInit(): void {
  }

  addClassFocus(event:any) {
    let element = event.srcElement;
    element.parentNode.parentNode.classList.add("focus");
    
  }

  removeClassFocus(event:any) {
    let element = event.srcElement;
    if(element.value.trim() == "")
      element.parentNode.parentNode.classList.remove("focus");  
  }

  login() {
    if(this.username == '1') {
      this.testUserService.userTestConnected = 1;
      this.router.navigateByUrl("/");
    }else {
      if(this.username == '2') {
        this.testUserService.userTestConnected = 2;
        this.router.navigateByUrl("/home-partner");
      }
    }
  }
}
