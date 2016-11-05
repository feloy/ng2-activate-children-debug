/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PizzaCanActivateService } from './pizza-can-activate.service';

describe('Service: PizzaCanActivate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PizzaCanActivateService]
    });
  });

  it('should ...', inject([PizzaCanActivateService], (service: PizzaCanActivateService) => {
    expect(service).toBeTruthy();
  }));
});
