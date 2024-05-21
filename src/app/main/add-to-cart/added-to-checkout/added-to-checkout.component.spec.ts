import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedToCheckoutComponent } from './added-to-checkout.component';

describe('AddedToCheckoutComponent', () => {
  let component: AddedToCheckoutComponent;
  let fixture: ComponentFixture<AddedToCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddedToCheckoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddedToCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
