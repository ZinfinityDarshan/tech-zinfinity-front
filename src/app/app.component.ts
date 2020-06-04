import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { SocialComponent } from './components/social/social.component';
import { EnquireComponent } from './modal/enquire/enquire.component';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'portfolio-d';
  constructor(public dialog: MatDialog, private _bottomSheet: MatBottomSheet) { 
    
  }

  ngOnInit() {
  $(function(){ 
    var navMain = $(".navbar-collapse");

    navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
    });
});
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

