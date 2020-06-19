import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperativaEditComponent } from './cooperativa-edit.component';

describe('CooperativaEditComponent', () => {
  let component: CooperativaEditComponent;
  let fixture: ComponentFixture<CooperativaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CooperativaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CooperativaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
