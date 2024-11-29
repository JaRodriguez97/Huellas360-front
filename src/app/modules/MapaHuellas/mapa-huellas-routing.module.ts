import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapaHuellasComponent } from './mapa-huellas.component';

const routes: Routes = [{ path: '', component: MapaHuellasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapaHuellasRoutingModule { }
