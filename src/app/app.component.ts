import { Component } from '@angular/core';
import{Product} from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
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
      price: 100,
      image: './assets/images/toy.jpg '
    },
    {
      id: '3',
      name: 'Producto 3',
      price: 100,
      image: './assets/images/toy.jpg '
    },
    {
      id: '4',
      name: 'Producto 1',
      price: 100,
      image: './assets/images/toy.jpg '
    }
  ];
  onLoaded(img:string){
    console.log("Log Padre", img);
  }
}

