import { PizzaService } from './pizza.service';
import { PizzaCanActivateService } from './pizza-can-activate.service';
import { ReginaComponent } from './regina/regina.component';
import { MargheritaComponent } from './margherita/margherita.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: HomeComponent, canActivateChild: [ PizzaCanActivateService ],
    children: [
      { path: '', component: MargheritaComponent, data: { type: PizzaService.PIZZA_MARGHERITA } },
      { path: '', component: ReginaComponent, data: { type: PizzaService.PIZZA_REGINA } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
