import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-added-to-checkout',
  standalone: true,
  imports: [CommonModule, MatIcon, MatDialogContent, 
    MatDialogTitle, MatDialogActions,],
  templateUrl: './added-to-checkout.component.html',
  styleUrl: './added-to-checkout.component.scss'
})
export class AddedToCheckoutComponent {
viewBag() {
  this.route.navigate(['/cart'])
  this.dialog.close()
}
  showInfo!: any
  constructor(@Inject(MAT_DIALOG_DATA) public selectedShoe: any, 
  public dialog: MatDialogRef<any>, private route: Router) { }
  ngOnInit(){
    console.log(this.selectedShoe)
  }
  closeDialog(){
    this.dialog.close()
  }
  navigateToCheckout(){
    this.route.navigate(['/checkout'])
    this.dialog.close()
  }
}
