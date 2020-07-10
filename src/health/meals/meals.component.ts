import { Component, OnInit } from '@angular/core';
import { MealsService, Meal } from '../shared/services/meals.service';
import { Observable, Subscription } from 'rxjs';
import { Store } from 'store';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss']
})
export class MealsComponent implements OnInit {

  meals$:Observable<Meal[]>;
  substription:Subscription;

  constructor(private mealsService:MealsService,private store:Store) { 
    
  }

  ngOnInit(): void {
    this.meals$ = this.store.select<Meal[]>('meals');
    this.meals$.subscribe(data=>{
      console.log("data" + data)
    }) 
    this.substription = this.mealsService.meals$.subscribe();
  }

   ngOnDestroy(): void {
    this.substription?.unsubscribe();
    
   }
}
