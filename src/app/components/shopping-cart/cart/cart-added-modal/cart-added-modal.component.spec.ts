import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartAddedModalComponent } from './cart-added-modal.component';

describe('CartItemComponent', () => {
  let component: CartAddedModalComponent;
  let fixture: ComponentFixture<CartAddedModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartAddedModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartAddedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
