import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule, HttpClientModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  categories = [
    {
      id: 3,
      img: '../../../assets/images/air-jordan.svg',
    },
    {
      id: 3,
      img: '../../../assets/images/air-jordan.svg',
    },
    {
      id: 3,
      img: '../../../assets/images/air-jordan.svg',
    },
    {
      id: 3,
      img: '../../../assets/images/air-jordan.svg',
    },
    {
      id: 3,
      img: '../../../assets/images/air-jordan.svg',
    },
    {
      id: 3,
      img: '../../../assets/images/air-jordan.svg',
    },
    {
      id: 3,
      img: '../../../assets/images/air-jordan.svg',
    },
    {
      id: 3,
      img: '../../../assets/images/air-jordan.svg',
    },
  ];

  private route = inject(Router);

  navigateToCategory() {
    this.route.navigate(['/categories']);
  }
  slideConfig = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    infinite: true,
  };

  addSlide() {
    this.categories.push();
  }

  removeSlide() {
    this.categories.length = this.categories.length - 1;
  }

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }
}
