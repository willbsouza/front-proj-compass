import { TestBed } from '@angular/core/testing';

import { DonatarioService } from './donatario.service';

describe('DonatarioService', () => {
  let service: DonatarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonatarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
