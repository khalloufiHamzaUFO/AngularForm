import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { FirstComponent } from './first/first.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { LoginComponent } from './core/manageUser/login/login.component';
import { ShowUsersComponent } from './core/manageUser/show-users/show-users.component';
import {ShowUserComponent} from "./core/manageUser/show-user/show-user.component";
import {DeleteUserComponent} from "./core/manageUser/delete-user/delete-user.component";
import {ShowProductsComponent} from "./core/manageProducts/show-products/show-products.component";
import {ShowProdutComponent} from "./core/manageProducts/show-produt/show-produt.component";
import {DeleteProductComponent} from "./core/manageProducts/delete-product/delete-product.component";
import {AddUserComponent} from "./core/manageUser/add-user/add-user.component";
import {MainUserComponent} from "./core/manageUser/main-user/main-user.component";

const routes: Routes = [
 // {path:'',redirectTo:'login',pathMatch:'full'},
 {path:'login',component:LoginComponent},
  {path:'test',component:ListUserComponent},
  {path:'first', component:FirstComponent},
  {path:'users', component:ShowUsersComponent},
  {path:'user/:id', component:ShowUserComponent},
  {path:'remove/:id', component:DeleteUserComponent},

  {path:'products', component:ShowProductsComponent},
  {path:'product/:id', component:ShowProdutComponent},
  {path:'removePro/:id', component:DeleteProductComponent},

  {path:'p',loadChildren:()=>import('../app/core/manageUser/auth/auth.module').then((t)=>t.AuthModule)},

  {path:'addUser', component:AddUserComponent},
  {path:'main-User', component:MainUserComponent},

  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
