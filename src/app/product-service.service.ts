import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products : Array<Product> = new Array <Product> ();

  constructor() {
    this.products.push({name :'TSHIRT',price : 50,link: 'assets/stock1/pic1.jpg/'});
    this.products.push({name :'TSHIRT',price : 70,link: 'assets/stock1/pic2.jpg/'});
    this.products.push({name :'TSHIRT',price : 950,link: 'assets/stock1/pic3.jpg/'});
    this.products.push({name :'TSHIRT',price : 20, link: 'assets/stock1/pic4.jpg/'});
  }
  getAll() : Array<Product>{
    return this.products ;
  }
  addProduct  (p:Product) : void {
    this.products.push(p) ;
  }
}
