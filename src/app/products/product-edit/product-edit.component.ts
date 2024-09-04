import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  productId: string;

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      name: [''],
      description: [''],
      price: ['']
    });
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id')!;
    this.productsService.getProduct(this.productId).subscribe(data => {
      this.productForm.patchValue(data);
    });
  }

  updateProduct(): void {
    const product = this.productForm.value;
    this.productsService.updateProduct(this.productId, product).then(() => {
      console.log('Product updated successfully');
      this.router.navigate(['/products']);
    }).catch(error => {
      console.error('Error updating product: ', error);
    });
  }
}
