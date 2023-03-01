import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  product: Product | undefined;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }
  delete(item:any){
    products.splice(products.indexOf(item), 1);
    this.router.navigate(['/categories/'+<number>this.product?.categoryId%10]);
  }
  react(item:any){
    item.likes++;

  }

}

