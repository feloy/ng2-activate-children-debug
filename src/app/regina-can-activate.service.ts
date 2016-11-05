import { PizzaService } from './pizza.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class ReginaCanActivateService implements CanActivate {

  constructor(private pizzaService: PizzaService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.pizzaService.getType() === PizzaService.PIZZA_REGINA;
  }
}
