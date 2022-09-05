import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { SplashService } from 'src/app/services/services-splash/splash.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  faSignOut = faSignOut;

  constructor(private router : Router, private splashScreen:SplashService) { }

  ngOnInit(): void {
  }

  logout() {
    this.router.navigate(['/login']);
    this.splashScreen.hasAlreadyBeenActivated = false;
  }

}
