import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EnquireComponent } from './modal/enquire/enquire.component';
import {MatBottomSheetModule, MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { SocialComponent } from './components/social/social.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-d';

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
}

export class BottomSheetOverviewExampleSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
