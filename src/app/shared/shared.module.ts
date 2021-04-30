import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {ExponentialPipe} from './pipes/exponential/exponential.pipe';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    ExponentialPipe,
    HeaderComponent,
    FooterComponent,
  ],
  exports: [
    ExponentialPipe,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
