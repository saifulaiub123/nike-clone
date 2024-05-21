import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, ElementRef, ViewChild, inject, viewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
export interface Categories {
  prodotti: CategoryType[];
}

export interface CategoryType {
  id:                 string;
  nome:               string;
  categoria:          string;
  prezzo:             number;
  taglie_disponibili: string[];
  colori_disponibili: string[];
  descrizione:        string;
  immagine:           string;
  images:string[]
}
@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [HttpClientModule, CommonModule,MatIconModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

  destroy$ = new Subject<void>()
  readonly jsonUrl = '../../../assets/scarpe.json';
  constructor(private http: HttpClient) { }
  Categories!: CategoryType[];
  private route = inject(Router)
  subCategories  =[
    '../../../assets/images/air-max.svg',
    '../../../assets/images/air-jordan.svg',
    '../../../assets/images/dunk.svg',
  ]
  getShows(): Observable<Categories> {
    return this.http.get<Categories>(this.jsonUrl);
  }
  
  ngOnInit(): void {
    this.getShows().pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.Categories = data.prodotti.map(res =>{
        return {...res, images: this.subCategories}
      })
      console.log(this.Categories)
    });
  }

  onShoeSelect(_shoeId:string){
    this.route.navigate(['/add-to-cart'],{
      queryParams: {id: _shoeId}
    })
  }

hoveredImage!: string;
selectedIndex!: number
  onMouseHover(_img: string, _idx:number) {
    this.hoveredImage =_img;
    this.selectedIndex = _idx
  }
  ngOnDestroy(){
    this.destroy$.next()
  }

}
