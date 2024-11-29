import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { MapaHuellasRoutingModule } from './mapa-huellas-routing.module';
import { MapaHuellasComponent } from './mapa-huellas.component';
import { InfoUserComponent } from '@components/info-user/info-user.component';

@NgModule({
  declarations: [MapaHuellasComponent, InfoUserComponent],
  imports: [CommonModule, MapaHuellasRoutingModule, LeafletModule],
})
export class MapaHuellasModule {}
