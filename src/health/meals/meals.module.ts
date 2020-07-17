import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MealsComponent } from "./meals.component";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { MealComponent } from "./meal/meal.component";
import { MealFormComponent } from './meal-form/meal-form.component';

export const routes: Routes = [
  {
    path: "",
    component: MealsComponent,
  },
  {
    path: "new",
    component: MealComponent,
  },
  {
    path:':id',
    component: MealComponent,
  }
];
@NgModule({
  declarations: [MealsComponent, MealComponent, MealFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
})
export class MealsModule {}
