import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../service/product.service";

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  constructor(private ac : ActivatedRoute, private router:Router,private serviceProduct : ProductService ) {
  }
  ngOnInit(): void {
    this.serviceProduct.deletetProductById(this.ac.snapshot.params['id']).subscribe(
      ()=>{
        return this.router.navigate(['products']);
      },
      (error) =>{
        let status = error.status
        switch(status){
          case 0:
            alert('server')
            break
          case 401 :
            alert('unauthorized')
            break
          case 404:
            alert('Route ERROR')
            break
        }
      })
  }

}
