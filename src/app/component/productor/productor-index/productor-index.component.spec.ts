import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductorIndexComponent } from './productor-index.component';

describe('ProductorIndexComponent', () => {
  let component: ProductorIndexComponent;
  let fixture: ComponentFixture<ProductorIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductorIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductorIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
