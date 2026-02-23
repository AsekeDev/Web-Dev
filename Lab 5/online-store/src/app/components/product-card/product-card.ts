import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  product = input.required<Product>();
  get telegramShareUrl(): string {
    return `https://t.me/share/url?url=${encodeURIComponent(this.product().link)}&text=${encodeURIComponent(this.product().name)}`;
  }
  deleteProduct = output<number>();
  onDelete() {
    console.log('DELETE clicked, id =', this.product().id);
    this.deleteProduct.emit(this.product().id);
  }
  likeProduct = output<number>();
  onLike() {
    this.likeProduct.emit(this.product().id);
  }
}
