import { Component, OnInit } from '@angular/core';
import { faWaveSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  faMagnifyingGlass = faWaveSquare;

  constructor() { }

  ngOnInit(): void {
  }

}
