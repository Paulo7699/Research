import { Component, OnInit } from '@angular/core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from 'src/app/services/services-css/theme/theme.service';

@Component({
  selector: 'app-toggle-dark-light',
  templateUrl: './toggle-dark-light.component.html',
  styleUrls: ['./toggle-dark-light.component.scss']
})
export class ToggleDarkLightComponent implements OnInit {
  faMoon = faMoon;
  faSun = faSun;

  constructor(private themeService : ThemeService) { }

  ngOnInit(): void {
  }

  switchTheme() {
    this.themeService.switchTheme();
  }
}
