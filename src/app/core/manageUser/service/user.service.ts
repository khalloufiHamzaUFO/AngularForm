import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Users} from "../../../model/users";

@Injectable({
  providedIn: 'root'
})
export class UserService {
//Injection pour utiliser les methodes cruds
  constructor(private http:HttpClient) { }
  baseUrl = "http://localhost:3000/users/";

  getUserList():Observable<Users[]>{
    return this.http.get<Users[]>(this.baseUrl);
  }

  getUserById(id:number):Observable<Users>{
    return this.http.get<Users>(this.baseUrl+id);
  }

  removeUser(id:any){
    return this.http.delete(this.baseUrl+id)
  }

  addUser(data:Users):Observable<Users>{
    return this.http.post<Users>(this.baseUrl,data);
  }



}
