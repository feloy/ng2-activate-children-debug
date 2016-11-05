import { PizzaCanActivateService } from './pizza-can-activate.service';
import { PizzaService } from './pizza.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MargheritaComponent } from './margherita/margherita.component';
import { ReginaComponent } from './regina/regina.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MargheritaComponent,
    ReginaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    PizzaService,
    PizzaCanActivateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
