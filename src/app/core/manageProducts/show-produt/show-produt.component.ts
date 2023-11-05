import {Component, OnInit} from '@angular/core';
import {ProductService} from "../service/product.service";
import {Product} from "../../../model/Product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-show-produt',
  templateUrl: './show-produt.component.html',
  styleUrls: ['./show-produt.component.css']
})
export class ShowProdutComponent implements OnInit{
  constructor(private productService:ProductService,private ac : ActivatedRoute) {}
  product : Product = new Product();
  ngOnInit(): void {
    this.productService.getProductById(this.ac.snapshot.params['id']).subscribe(
      (product)=>{
        this.product = product ;
        console.log(product)
      }
    );
  }


}
