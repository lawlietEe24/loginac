import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private productsService: ProductsService) {
    this.productForm = this.fb.group({
      name: [''],
      description: [''],
      price: ['']
    });
  }

  addProduct(): void {
    const product = this.productForm.value;
    this.productsService.addProduct(product).then(() => {
      console.log('Product added successfully');
    }).catch(error => {
      console.error('Error adding product: ', error);
    });
  }
}
