import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ArrowModule } from '../SVG/Arrow/arrow.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, ArrowModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginModule {}
