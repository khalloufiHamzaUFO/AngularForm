import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../../../model/Product";
import {Observable} from "rxjs";
import {Users} from "../../../model/users";

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit{
  baseUrl = "http://localhost:3000/products/"
  constructor(private http : HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }

  getProductById(id : number):Observable<Product>{
    return this.http.get<Product>(this.baseUrl+id)
  }

 deletetProductById(id : number){
    return this.http.delete(this.baseUrl+id)
  }

  ngOnInit(): void {
  }
}
