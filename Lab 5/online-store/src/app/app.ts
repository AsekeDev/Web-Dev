import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductList} from './components/product-list/product-list';
import { ProductService } from './services/product';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  imports: [ ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('online-store');
  categories: Category[] = [];
  allProducts: Product[] = [];

  selectedCategoryId: number | null = null;

  constructor(private productService: ProductService){
    this.categories = this.productService.getCategories();
    this.allProducts = this.productService.getProducts();
  }
  selectCategory(id: number){
    this.selectedCategoryId = id;
  }
  handleDelete(id: number) {
    this.allProducts = this.allProducts.filter(p => p.id !== id);
    console.log('App got delete id =', id);
  }
  get filteredProducts(): Product[]{
    if(this.selectedCategoryId === null) return [];
    return this.allProducts.filter(p => p.categoryId === this.selectedCategoryId)
  }
  handleLike(id: number) {
    this.allProducts = this.allProducts.map(p =>
      p.id === id ? { ...p, likes: p.likes + 1 } : p
    );
  }
}
