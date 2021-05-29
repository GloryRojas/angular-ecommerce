import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ProductsService} from '../../../core/services/products/products.service';
import {Product} from '../../../core/models/product.model';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.product$ = this.route.params
      .pipe(
        switchMap((params: Params) => {
          return this.productsService.getProduct(params.id);
        })
      );
  }

  createProduct() {
    const newProduct: Product = {
      id: '222',
      title: 'nuevo desde angular',
      image: 'https://firebasestorage.googleapis.com/v0/b/platzi-store-jdh.appspot.com/o/stickers1.png?alt=media&token=629fa9ef-4696-43ef-9c27-32b2574a910e',
      price: 3000,
      description: 'nuevo producto'
    };
    this.productsService.createProduct(newProduct)
      .subscribe(product => {
        console.log(
          product
        );
      });
  }

  updateProduct() {
    const newProduct: Partial<Product> = {
      title: 'editando desde angular',
    };
    this.productsService.updateProduct('222', newProduct);
  }

  deleteProduct() {
    this.productsService.deleteProduct('222')
      .subscribe(product => {
        console.log(product);
      });
  }

  getRandomUsers(){
    this.productsService.getRandomUsers()
      .subscribe(users => {
        console.log(users);
      });
  }
}
