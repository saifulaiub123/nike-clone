import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Categories, CategoryType } from '../categories/categories.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AddedToCheckoutComponent } from './added-to-checkout/added-to-checkout.component';
import {MatButtonModule} from '@angular/material/button';
import { _DisposeViewRepeaterStrategy } from '@angular/cdk/collections';
@Component({
  selector: 'app-add-to-cart',
  standalone: true,
  imports: [HttpClientModule, CommonModule, 
    MatButtonModule,MatIconModule, MatDialogModule],
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.scss'
})
export class AddToCartComponent {
  ShoeId!: number
  destroy$ = new Subject<void>()
  Categories!: CategoryType[];
  selectedShoe!: CategoryType
  selectedShowSize: string = '0';
  isSelected: boolean =true;
  readonly jsonUrl = '../../../assets/scarpe.json';
  immages  = [
    '../../../assets/images/air-max.svg',
    '../../../assets/images/air-jordan.svg',
    '../../../assets/images/dunk.svg',
    '../../../assets/images/air-max.svg',
    '../../../assets/images/air-jordan.svg',
    '../../../assets/images/dunk.svg',
  ]
  constructor(private route: ActivatedRoute,
    private dialog: MatDialog, private http: HttpClient) { }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log('Query params:', params);
      this.ShoeId = params['id'];
      this.getShows().pipe(takeUntil(this.destroy$)).subscribe(data => {
        this.Categories = data.prodotti
        this.filterShow(this.ShoeId)
      });
    });
    
  }
  selectedSize(_size: string){
    this.isSelected= true;
    this. selectedShowSize = _size
  }

  getShows(): Observable<Categories> {
    return this.http.get<Categories>(this.jsonUrl);
  }

  filterShow(_shoeId: number){
    this.selectedShoe = this.Categories.find(category => Number(category.id) === Number(_shoeId)) as CategoryType
  }
  addToCart(){
    if(this.selectedShowSize !== '0'){
      this.dialog.open(AddedToCheckoutComponent,
        {
          data: {showInfo:this.selectedShoe,size: this.selectedShowSize},
          width: '25%'

        }
      )
    }
    else{
      this.isSelected = false
    }
  }

  hoveredImage!: string;
selectedIndex!: number
  onMouseHover(_img: string, _idx:number) {
    this.hoveredImage =_img;
    this.selectedIndex = _idx
  }
selectedImages!: number
  selectedImage(_idx: number){
    this.selectedImages = _idx
  }


}
