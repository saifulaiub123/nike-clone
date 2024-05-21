 import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatRadioChange, MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select'
import {MatCheckboxModule} from '@angular/material/checkbox';
@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [MatIcon, MatInputModule,MatRadioModule, 
    MatSelectModule, ReactiveFormsModule,MatCheckboxModule, CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})

export class CheckoutComponent {
  userInfoForm!: FormGroup
  userInfo!: any;
  isformSubmitted: boolean = false;
  isShippingSpeedSelected!:boolean
  private fb = inject(FormBuilder)
  shippingSpeedList : {amount: number, date: Date,selected:boolean}[] =[
    {
      amount: 8,
      date: new Date(),
      selected: false
    },
    {
      amount: 20,
      date: new Date(),selected: false
    },
    {
      amount: 30,
      date: new Date(),selected: false
    },
  ]
  isPaymentMethodSelected!: boolean;
  ngOnInit(){
    this.userInfoForm = this.fb.group({
      first_name: ['',Validators.required],
      last_name: ['',Validators.required],
      address: ['',Validators.required],
      email: ['',[Validators.required, Validators.email]],
      phone_number: ['',Validators.required],
      city: ['',Validators.required],
      state: ['',Validators.required],
      postal_code: ['',Validators.required]
    })
    
  }
  getControl(_control:string): FormControl{
    return this.userInfoForm.controls[_control] as FormControl
  }
  isControlInvalid(_control:string):boolean{
    const control = this.userInfoForm.controls[_control];
    return control.invalid && (control.touched || control.dirty)
  }

  shippingSpeed: any;
  selectShippingSpeed(_item: any, _index:number){
      console.log(_item)
      this.shippingSpeed = _item;
      this.shippingSpeedList.map(res =>{
        res.selected = false
      })
      this.shippingSpeedList[_index].selected = true
  }

  save(){
    this.isformSubmitted = true
    this.userInfo = this.userInfoForm.value
    console.log(this.userInfo)
  }
  deliveryOptionEdit!: boolean;
  showBillingAddress!: boolean;
  isContinuetopayment!: boolean;
  continueToPayment(){
    this.deliveryOptionEdit = true
    this.isPaymentMethodSelected = true
    this.showBillingAddress=true;
    this.isContinuetopayment=true;

  }
  continueToReview!: boolean
  isShowcontinueToReview: boolean = true
  continueToOrderReview(){
    this.continueToReview = true
    this.isShowcontinueToReview=false
  }
  paymentMethodValue: string = 'credit'
  onPaymentMethodCheck(_event: MatRadioChange){
  this.paymentMethodValue = _event.value
  }

  onOrderReviewed(){}
}
