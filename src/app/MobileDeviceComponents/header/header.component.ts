import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import {MatBottomSheetModule, MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { SocialComponent } from 'src/app/components/social/social.component';
import { EnquireComponent } from 'src/app/modal/enquire/enquire.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog, private _bottomSheet: MatBottomSheet){
   
  }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
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
}


export class BottomSheetOverviewExampleSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}


