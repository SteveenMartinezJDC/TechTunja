import { Component } from '@angular/core';
import {Product} from '../../models/product.model';
import {} from '../../models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  products: Product[]=[
    {
      id: '1',
      name: 'Producto 1',
      image: './assets/images/toy.jpg ',
      price: 100
    },
    {
      id: '2',
      name: 'Producto 2',
      price: 250,
      image: './assets/images/toy.jpg '
    },
    {
      id: '3',
      name: 'Producto 3',
      price: 450,
      image: './assets/images/toy.jpg '
    },
    {
      id: '4',
      name: 'Producto 4',
      price: 50,
      image: './assets/images/toy.jpg '
    }
  ];
}
