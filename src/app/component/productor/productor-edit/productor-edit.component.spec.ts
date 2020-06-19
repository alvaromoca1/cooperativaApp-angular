import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductorEditComponent } from './productor-edit.component';

describe('ProductorEditComponent', () => {
  let component: ProductorEditComponent;
  let fixture: ComponentFixture<ProductorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductorEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
