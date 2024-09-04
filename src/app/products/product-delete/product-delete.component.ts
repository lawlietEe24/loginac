import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  productId: string;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id')!;
  }

  deleteProduct(): void {
    this.productsService.deleteProduct(this.productId).then(() => {
      console.log('Product deleted successfully');
      this.router.navigate(['/products']);
    }).catch(error => {
      console.error('Error deleting product: ', error);
    });
  }
}
