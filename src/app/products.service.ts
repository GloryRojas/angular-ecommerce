import { Injectable } from '@angular/core';
import {Product} from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
    {
      id: '1',
      image: 'https://static.platzi.com/media/tmp/class-files/github/platzi-store/platzi-store-9-inputs-outputs/src/assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'https://static.platzi.com/media/tmp/class-files/github/platzi-store/platzi-store-9-inputs-outputs/src/assets/images/hoodie.png',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'https://static.platzi.com/media/tmp/class-files/github/platzi-store/platzi-store-9-inputs-outputs/src/assets/images/mug.png',
      title: 'Mug',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'https://static.platzi.com/media/tmp/class-files/github/platzi-store/platzi-store-9-inputs-outputs/src/assets/images/pin.png',
      title: 'Pin',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'https://static.platzi.com/media/tmp/class-files/github/platzi-store/platzi-store-9-inputs-outputs/src/assets/images/stickers1.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'https://static.platzi.com/media/tmp/class-files/github/platzi-store/platzi-store-9-inputs-outputs/src/assets/images/stickers2.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    }
  ];
  constructor() { }

  getAllProducts() {
    return this.products;
  }

  getProduct( id: string) {
    return this.products.find(item => id === item.id);
  }
}
