import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

export const routes: Routes = [{
   path:'auth',
   children:[
     {path:'',pathMatch:'full',redirectTo:'login'},
     {path:'login',loadChildren:'./login/login.module#LoginModule'},
     {path:'register',loadChildren:'./Register/register.module#RegisterModule'}
   ]
}];
@NgModule({
  imports: [CommonModule, RouterModule],
})
export class AuthModule {}
