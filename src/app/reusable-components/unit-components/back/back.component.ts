import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.scss']
})
export class BackComponent implements OnInit {
  @Input()
  urlBack : string = '';

  faBack = faArrowLeft;

  constructor(private router : Router) { }

  ngOnInit(): void {
    console.log(this.urlBack);
    
  }


  navigateBack() {
    console.log("entreeeee");
    
    try {      
      this.router.navigate([this.urlBack]);
    } catch {
      console.log("errrrrrrrrrrrrrrrreur : ");
      this.router.navigate(["/"]);      
    }
  }
}
