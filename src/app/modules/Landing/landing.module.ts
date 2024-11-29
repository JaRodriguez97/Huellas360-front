import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { HeaderComponent } from '@components/header/header.component';
import { MainComponent } from '@components/main/main.component';
import { HuellitasComponent } from '@components/huellitas/huellitas.component';
import { SumateComponent } from '@components/sumate/sumate.component';
import { FamiliasComponent } from '@components/familias/familias.component';
import { ArrowModule } from '../SVG/Arrow/arrow.module';
import { ContactComponent } from '@components/contact/contact.component';
import { FacebookComponent } from '@components/SVG/facebook/facebook.component';
import { InstagramComponent } from '@components/SVG/instagram/instagram.component';
import { TiktokComponent } from '@components/SVG/tiktok/tiktok.component';
import { BurguerMenuComponent } from '@components/SVG/burguer-menu/burguer-menu.component';
import { CloseComponent } from '@components/SVG/close/close.component';

@NgModule({
  declarations: [
    LandingComponent,
    HeaderComponent,
    MainComponent,
    HuellitasComponent,
    SumateComponent,
    FamiliasComponent,

    ContactComponent,
    FacebookComponent,
    InstagramComponent,
    TiktokComponent,
    BurguerMenuComponent,
    CloseComponent,
  ],
  imports: [CommonModule, LandingRoutingModule, ArrowModule],
})
export class LandingModule {}
