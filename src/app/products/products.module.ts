import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductDeleteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
