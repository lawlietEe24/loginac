import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  deleteProduct(id: string): void {
    this.productsService.deleteProduct(id).then(() => {
      console.log('Product deleted successfully');
    }).catch(error => {
      console.error('Error deleting product: ', error);
    });
  }
}
