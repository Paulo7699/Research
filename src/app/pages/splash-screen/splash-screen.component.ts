import { Component, Input, OnInit } from '@angular/core';
import { SplashAnimationType } from 'src/app/enum/splash-animation-type';
import { SplashService } from 'src/app/services/services-splash/splash.service';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})


export class SplashScreenComponent implements OnInit {
  windowWidth: string | undefined;
  splashTransition: string | undefined;
  opacityChange: number = 1;
  showSplash = true;

  @Input() animationDuration: number = 0.5;
  @Input() duration: number = 3;
  @Input() animationType: string = SplashAnimationType.SlideLeft;

  constructor(private splashService:SplashService){}

  ngOnInit(): void {
    setTimeout(() => {
      let transitionStyle = "";
      switch (this.animationType) {
        case SplashAnimationType.SlideLeft:
          this.windowWidth = "-" + window.innerWidth + "px";
          transitionStyle = "left " + this.animationDuration + "s";
          break;
        case SplashAnimationType.SlideRight:
          this.windowWidth = window.innerWidth + "px";
          transitionStyle = "left " + this.animationDuration + "s";
          break;
        case SplashAnimationType.FadeOut:
          transitionStyle = "opacity " + this.animationDuration + "s";
          this.opacityChange = 0;
      }

      this.splashTransition = transitionStyle;

      setTimeout(() => {
        this.showSplash = !this.showSplash;
      }, this.animationDuration * 1000);
      this.splashService.hasAlreadyBeenActivated = true;
    }, this.duration * 1000);
  }

  firstTime() {
    return !this.splashService.hasAlreadyBeenActivated;
  }
}
