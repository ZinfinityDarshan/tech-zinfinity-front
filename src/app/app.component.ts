import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { SocialComponent } from './components/social/social.component';
import { EnquireComponent } from './modal/enquire/enquire.component';
import { Meta, Title } from '@angular/platform-browser';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  // title = 'portfolio-d';
  constructor(public dialog: MatDialog, private _bottomSheet: MatBottomSheet , private titleServices: Title, private meta: Meta ) { 
    this.titleServices.setTitle('TechZinfi');
    this.meta.addTag({ name: 'description', content:'abc'});
    this.meta.addTag({name:'keywords', content:'a,b,c'})
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

