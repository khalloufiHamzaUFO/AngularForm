import {Component, OnInit} from '@angular/core';
import {Users} from "../../../model/user";

@Component({
  selector: 'app-main-user',
  templateUrl: './main-user.component.html',
  styleUrls: ['./main-user.component.css']
})
export class MainUserComponent {
  list:Users[]=[];
  user = new Users();

  saveUser(data:Users){
    this.user = data ;
    this.list.push(this.user)
    console.log(this.user)
    console.log(this.list)
  }

}
