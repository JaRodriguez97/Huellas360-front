import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArrowRoutingModule } from './arrow-routing.module';
import { ArrowComponent } from './arrow.component';

@NgModule({
  declarations: [ArrowComponent],
  imports: [CommonModule, ArrowRoutingModule],
  exports: [ArrowComponent],
})
export class ArrowModule {}
