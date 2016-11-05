import { PizzaService } from './pizza.service';
import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class PizzaCanActivateService implements CanActivateChild {

  constructor(private pizzaService: PizzaService) { }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('canActivate Pizza called with data: ' + route.data['type']);
    return this.pizzaService.getType() === route.data['type'];
  }
}
