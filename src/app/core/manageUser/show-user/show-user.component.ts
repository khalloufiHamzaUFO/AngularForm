import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../service/user.service";
import {Users} from "../../../model/users";

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit{
  public id: number | undefined;
  user= new Users() ;
  constructor(private route: ActivatedRoute,private service:UserService) {
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    this.service.getUserById(this.id).subscribe(
      d=>{
        console.log(d);
        this.user = d ;
      }
    );
  }


}
