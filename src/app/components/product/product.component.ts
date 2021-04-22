import {Component, Input, Output, EventEmitter, SimpleChanges, OnChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit, DoCheck, OnDestroy {
  @Input() product: Product;
  @Output() productClicker: EventEmitter<any> = new EventEmitter();

  ngOnInit(){
    console.log('oninit');
  }
  // ngOnChanges(changes: SimpleChanges){
  //   console.log('changes', changes);
  // }

  ngDoCheck(): void {
    console.log('buu');
  }

  ngOnDestroy(){
    console.log('adios');
  }

  addCart() {
    console.log('agregando');
    this.productClicker.emit(this.product);
  }
}
