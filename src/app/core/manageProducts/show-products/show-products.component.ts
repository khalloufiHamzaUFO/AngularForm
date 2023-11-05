import {Component, OnInit} from '@angular/core';
import {ProductService} from "../service/product.service";
import {Product} from "../../../model/Product";
import {Router, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit{
  constructor(private serviceProduct:ProductService,private router : Router) {
  }
  products : Product[] = [];
  ngOnInit(): void {
    this.serviceProduct.getProducts().subscribe(
      (d)=>{
        this.products = d ;
        console.log(this.products)
      }
    )
  }


  showDetails(id: number) {
    return this.router.navigate(['product/'+id]);

  }

  removeProduct(id: number) {
    return this.router.navigate(['removePro/'+id]);
  }


}
