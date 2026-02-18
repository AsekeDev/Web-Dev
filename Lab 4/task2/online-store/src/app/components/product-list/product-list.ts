import { Component } from '@angular/core';
import {Product} from '../../models/product.model'
import { CommonModule } from '@angular/common';
import { ProductCard } from '../product-card/product-card';


@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: Product[] = [
    {
      id: 1,
      name: 'Iphone 13',
      description: 'Powerful smartphone with great performance and camera.',
      price: 300000,
      rating: 4.9,
      image: 'assets/images/Iphone13.jpg',
      link: 'https://kaspi.kz/shop/search/?text=iphone%2013'
    },
    {
      id: 2,
      name: 'Sony PlayStation 5',
      description: 'Next-generation gaming console with powerful graphics and fast SSD storage.',
      price: 299990,
      rating: 4.9,
      image: 'assets/images/ps5-1.jpg',
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/'
    },
    {
      id: 3,
      name: 'Apple AirPods Pro (2nd gen)',
      description: 'Wireless earbuds with active noise cancellation and high-quality sound.',
      price: 129990,
      rating: 4.9,
      image: 'assets/images/airpods-1.jpg',
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/'
    },
    {
      id: 4,
      name: 'Samsung Galaxy S24 Ultra 5G 12/512',
      description: 'Premium flagship smartphone with powerful processor and advanced camera system. Ideal for gaming, photography and heavy multitasking.',
      price: 649990,
      rating: 4.9,
      image: 'assets/images/s24-1.jpg',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-512-gb-chernyi-podarok-116004807/'
    },
    {
      id: 5,
      name: 'Xiaomi Redmi Note 13 Pro 5G 8/256',
      description: 'Affordable smartphone with high refresh rate display and solid performance. Great value for daily use.',
      price: 149990,
      rating: 4.7,
      image: 'assets/images/redmi-1.jpg',
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-5g-8-gb-256-gb-chernyi-115911365/'
    },
    {
      id: 6,
      name: 'Apple Watch Series 9 GPS 41mm',
      description: 'Smartwatch with fitness tracking, notifications and bright display. Perfect for sports and everyday productivity.',
      price: 189990,
      rating: 4.8,
      image: 'assets/images/watch-1.jpg',
      link: 'https://kaspi.kz/shop/p/apple-watch-series-9-gps-s-m-41-mm-serebristyi-sinii-113398164/'
    },
    {
      id: 7,
      name: 'Lenovo Legion 5 15.6" 16GB / SSD 1024GB',
      description: 'Powerful gaming laptop with high-performance graphics card. Suitable for gaming, programming and video editing.',
      price: 499990,
      rating: 4.8,
      image: 'assets/images/legion-1.jpg',
      link: 'https://kaspi.kz/shop/p/lenovo-legion-5-15-6-16-gb-ssd-1024-gb-dos-15iah7h-82rb00perk-108701124/'
    },
    {
      id: 8,
      name: 'Dyson V12 Detect Slim Absolute SV46',
      description: 'Cordless vacuum cleaner with strong suction power and laser dust detection. Lightweight and efficient for home cleaning.',
      price: 399990,
      rating: 4.8,
      image: 'assets/images/dyson-1.jpg',
      link: 'https://kaspi.kz/shop/p/dyson-v12-detect-slim-absolute-sv46-zheltyi-serebristyi-114964373/'
    },
    {
      id: 9,
      name: 'Sony PlayStation 5 Slim',
      description: 'Compact version of PlayStation 5 with the same powerful hardware. Modern design and improved storage.',
      price: 378363,
      rating: 4.9,
      image: 'assets/images/ps5slim-1.jpg',
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-geimpad-chernyi-115629638/'
    },
    {
      id: 10,
      name: 'Xiaomi Redmi Note 13 Pro 4G NFC 8/256',
      description: 'Budget-friendly smartphone with AMOLED display and solid camera system. Reliable performance for everyday tasks.',
      price: 129990,
      rating: 4.7,
      image: 'assets/images/redmi4g-1.jpg',
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-4g-nfc-8-gb-256-gb-chernyi-115994614/'
    }
  ];

}
