import { TestBed } from '@angular/core/testing';

import { ProductoresService } from './productores.service';

describe('ProductoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductoresService = TestBed.get(ProductoresService);
    expect(service).toBeTruthy();
  });
});
