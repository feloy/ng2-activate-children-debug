/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MargheritaCanActivateService } from './margherita-can-activate.service';

describe('Service: MargheritaCanActivate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MargheritaCanActivateService]
    });
  });

  it('should ...', inject([MargheritaCanActivateService], (service: MargheritaCanActivateService) => {
    expect(service).toBeTruthy();
  }));
});
