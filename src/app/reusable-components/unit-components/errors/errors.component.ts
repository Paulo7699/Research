import { Component, OnInit } from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { ErrorService } from 'src/app/services/services-errors/error.service';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss']
})
export class ErrorsComponent implements OnInit {
  faClose = faClose;

  constructor(private errorService : ErrorService) { }

  ngOnInit(): void {
  }

  getErrorTitle() {
    return this.errorService.getErrorTitle();
  }

  getErrorMessage() {
    return this.errorService.getErrorMessage();
  }

  isShown() {
    return this.errorService.isShown();
  }

  changeValue() {
    this.errorService.changeValue();
  }
}
