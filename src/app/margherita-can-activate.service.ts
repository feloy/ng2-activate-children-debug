import { PizzaService } from './pizza.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class MargheritaCanActivateService implements CanActivate {

  constructor(private pizzaService: PizzaService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('canActivate Margherita called');
    return this.pizzaService.getType() === PizzaService.PIZZA_MARGHERITA;
  }
}