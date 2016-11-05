import { ReginaCanActivateService } from './regina-can-activate.service';
import { MargheritaCanActivateService } from './margherita-can-activate.service';
import { ReginaComponent } from './regina/regina.component';
import { MargheritaComponent } from './margherita/margherita.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', component: MargheritaComponent, canActivate: [ MargheritaCanActivateService ] },
      { path: '', component: ReginaComponent, canActivate: [ ReginaCanActivateService ] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
