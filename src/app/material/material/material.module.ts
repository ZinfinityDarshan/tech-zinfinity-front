import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule, MatDividerModule,MatTabsModule, MatButtonModule,
    MatRippleModule, MatIconModule, MatDialogModule, MatInputModule, MatCardModule
  ],
  exports:[
    MatToolbarModule, MatDividerModule, MatTabsModule, MatButtonModule,
    MatRippleModule, MatIconModule, MatDialogModule, MatInputModule, MatCardModule
  ]
})
export class MaterialModule { }
