import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAnimationComponent } from 'src/app/reusable-components/unit-components/dialog-animation/dialog-animation.component';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent {
  dialogRef : any;

  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialogRef = this.dialog.open(DialogAnimationComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    this.dialogRef.afterClosed().subscribe((result:any) => {
      console.log(`Dialog result: ${result}`); // Pizza!
    });
  }

}
