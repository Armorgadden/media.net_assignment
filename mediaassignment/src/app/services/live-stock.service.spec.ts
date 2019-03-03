import { TestBed, inject } from '@angular/core/testing';

import { LiveStockService } from './live-stock.service';

describe('LiveStockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LiveStockService]
    });
  });

  it('should be created', inject([LiveStockService], (service: LiveStockService) => {
    expect(service).toBeTruthy();
  }));
});
