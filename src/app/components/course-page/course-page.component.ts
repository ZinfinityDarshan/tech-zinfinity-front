import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SocialComponent } from '../social/social.component';
import { EnquireComponent } from 'src/app/modal/enquire/enquire.component';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {


  constructor(public dialog: MatDialog, private _bottomSheet: MatBottomSheet){
   
  }
  openBottomSheet(): void {
    this._bottomSheet.open(SocialComponent, {
      panelClass: 'custom-width'
  });
  }
 

  clicked(){
      console.log('clicked');   
  }
  openEnquiryDialog(){
    this.dialog.open(EnquireComponent,{
      width:'400px',
    })
  }

  ngOnInit(): void {
  }

}
