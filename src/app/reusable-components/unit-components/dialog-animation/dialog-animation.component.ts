import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-animation',
  templateUrl: './dialog-animation.component.html',
  styleUrls: ['./dialog-animation.component.scss']
})
export class DialogAnimationComponent {
  itemToDelete : string = '';  

  constructor(
    public dialogRef: MatDialogRef<DialogAnimationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.itemToDelete = data.itemToDelete;
  }

  onCommand(): void {
    this.dialogRef.close(true);
  }
  onDelete(): void {
    this.dialogRef.close(false);
  }
}
