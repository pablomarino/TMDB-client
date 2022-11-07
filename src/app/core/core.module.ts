import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { CardwallComponent } from './cardwall/cardwall.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { ErrorComponent } from './error/error.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    CardwallComponent,
    FooterComponent,
    ErrorComponent
  ],
  exports:[
    HeaderComponent,
    NavComponent,
    CardwallComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class CoreModule { }
