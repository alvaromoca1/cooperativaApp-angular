import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperativaIndexComponent } from './cooperativa-index.component';

describe('CooperativaIndexComponent', () => {
  let component: CooperativaIndexComponent;
  let fixture: ComponentFixture<CooperativaIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CooperativaIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CooperativaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
