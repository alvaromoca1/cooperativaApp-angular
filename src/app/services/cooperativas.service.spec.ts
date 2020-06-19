import { TestBed } from '@angular/core/testing';

import { CooperativasService } from './cooperativas.service';

describe('CooperativasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CooperativasService = TestBed.get(CooperativasService);
    expect(service).toBeTruthy();
  });
});
