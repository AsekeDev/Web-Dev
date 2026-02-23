import { CommonModule } from '@angular/common';
import { ProductCard } from '../product-card/product-card';
import {ProductService} from '../../services/product';
import {Product} from '../../models/product.model';
import {input, Component, output} from '@angular/core';


@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products = input<Product[]>([]);

  deleteProduct = output<number>();

  removeProduct(id: number) {
    this.deleteProduct.emit(id);
  }
  likeProduct = output<number>();

  like(id: number) {
    this.likeProduct.emit(id);
  }
}

