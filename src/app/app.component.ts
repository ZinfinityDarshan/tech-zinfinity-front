import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EnquireComponent } from './modal/enquire/enquire.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-d';

  constructor(public dialog: MatDialog){

  }

  clicked(){
      console.log('clicked');   
  }
  openEnquiryDialog(){
    this.dialog.open(EnquireComponent,{
      width:'400px',
    })
  }
}
