import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Meal, MealsService } from 'src/health/shared/services/meals.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MealComponent implements OnInit {

  constructor(private mealSerice:MealsService,private router:Router) { }

  ngOnInit(): void {

  }


  async Oncreate(event)
  {
       await this.mealSerice.addmeal(event);
       this.backToMeal();    
  }

  backToMeal()
  {
    this.router.navigate(['../'])
  }

}
