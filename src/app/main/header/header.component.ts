import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
menus = ['New & Featured','Men','Women','Kids','Jordan','Sales']
nikeEventItems = [
  { name:"Nike Summer  Event",
  categories:[
    "Extra 25% Off Select Styles",
  ]
},
  {
  name:
  "New & Featured",
  categories:[
    "New Arrivals",
    "Best Sellers",
    "New & Upcoming Drops",
  ]
},
  {
  name:
  "Trending",
  categories:[
    "ACG",
    "Lifestyle Running",
    "The Color Shop",
    "Shop Sport",
    "AJ11 Retro Lows & More",
  ]
},
  {
  name:
  "Shop Classics",
  categories:[
    "Dunk",
    "Air Jordan 1",
    "Air Force",
    "Air Max",
    "Blazer",
    "Vomero",
  ]
},
  {
  name:
  "Explore",
  categories:[
    "SNKRS Launch Calendar",
    "Running Shoe Finder",
    "Bra Finder",
    "Product Care",
    "Member Rewards",
    "Buying Guides",
  ]
}
];
@ViewChild('navItem') navItem!: ElementRef;
selectedIndex!:number;
isMenuItemHovered!:boolean;
onMouseHover(_index:number){
 this.selectedIndex =  _index
 this.isMenuItemHovered = true;
 console.log(this.selectedIndex)
 this.navItem.nativeElement.classList.add('nav-height')
}

}
