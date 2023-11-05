import {Component, OnInit} from '@angular/core';
import {UserService} from "../service/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit{
  constructor(private ac : ActivatedRoute ,private userservice : UserService,private router:Router) {
  }

  id :any ;

  ngOnInit(): void {
    this.id=

    this.userservice.removeUser(this.ac.snapshot.params['id']).subscribe(
    ()=>{
      return this.router.navigate(['users']);
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
            alert('unauthorized')
            break
        }
    })
  }


}
