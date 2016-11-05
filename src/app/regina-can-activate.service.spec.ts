/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReginaCanActivateService } from './regina-can-activate.service';

describe('Service: ReginaCanActivate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReginaCanActivateService]
    });
  });

  it('should ...', inject([ReginaCanActivateService], (service: ReginaCanActivateService) => {
    expect(service).toBeTruthy();
  }));
});
