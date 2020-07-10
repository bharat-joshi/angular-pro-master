import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/auth/shared/guards/auth.guard';
import { SharedModule } from './shared/shared.module';

export const routes : Routes =[
   {path:'meals' ,canActivate:[AuthGuard], loadChildren: ()=> import('../health/meals/meals.module').then(m=>m.MealsModule) },
   {path:'schedule' ,canActivate:[AuthGuard],loadChildren: ()=> import('../health/schedule/schedule.module').then(m=>m.ScheduleModule) },
   {path:'workouts' ,canActivate:[AuthGuard],loadChildren: ()=> import('../health/workouts/workouts.module').then(m=>m.WorkoutsModule) }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule.forRoot()
  ]
})
export class HealthModule { }
