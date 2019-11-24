import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {MatToolbarModule} from '@angular/material/toolbar';
import * as Material from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatButtonModule,
    Material.MatTableModule,
    Material.MatPaginatorModule,
    Material.MatSortModule,
    Material.MatIconModule,
    Material.MatDialogModule,
    Material.MatSnackBarModule,
    Material.MatSelectModule
  ],
  exports: [
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatButtonModule,
    Material.MatTableModule,
    Material.MatPaginatorModule,
    Material.MatSortModule,
    Material.MatIconModule,
    Material.MatDialogModule,
    Material.MatSnackBarModule,
    Material.MatSelectModule

  ]

})
export class MaterialModule { }
