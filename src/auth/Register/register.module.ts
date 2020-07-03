import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, ROUTES, Routes } from "@angular/router";
import { RegisterComponent } from './register.component';

export const routes: Routes = [{ path: "", component: RegisterComponent }];

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class RegisterModule {}
