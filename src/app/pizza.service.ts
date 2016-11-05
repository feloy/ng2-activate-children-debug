import { Injectable } from '@angular/core';

@Injectable()
export class PizzaService {

  public static readonly PIZZA_MARGHERITA = 'margherita';
  public static readonly PIZZA_REGINA = 'regina';

  constructor() { }

  public getType(): string {
    return PizzaService.PIZZA_MARGHERITA;
  }
}
