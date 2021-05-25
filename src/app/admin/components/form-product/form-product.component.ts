import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductsService} from '../../../core/services/products/products.service';
import {RouteConfigLoadStart, Router} from '@angular/router';
import {MyValidators} from '../../../utils/validators';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize, map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;
  image$: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private storage: AngularFireStorage,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid){
      const product = this.form.value;
      this.productsService.createProduct(product)
        .subscribe(newProduct => {
          this.router.navigate(['./admin/products']);
          console.log(newProduct);
        });
    }
  }

  uploadFile(event){
    const file = event.target.files[0];
    const dir = 'image.png';
    const fileRef = this.storage.ref(dir);
    const task = this.storage.upload(dir, file);
    task.snapshotChanges()
      .pipe(
        finalize(() =>  {
          this.image$ = fileRef.getDownloadURL();
          this.image$.subscribe( url => {
            this.form.get('image').setValue(url);
          });
        })
      )
      .subscribe();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]],
    });
  }

  get priceField() {
    return this.form.get('price');
  }

}
