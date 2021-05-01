import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';
import {ProductsComponent} from './components/products/products.component';
import {ProductComponent} from './components/product/product.component';
import {ProductsRoutingModule} from './products.routing.model';

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule
  ]
})

export class ProductsModule {

}
