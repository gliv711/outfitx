import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  products :Array<Product> = new Array <Product>() ;

  constructor(private productService : ProductServiceService) { }

  ngOnInit() {
this.products = this.productService.getAll();
  }

}
