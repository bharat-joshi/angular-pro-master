import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Meal, MealsService } from "src/health/shared/services/meals.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: "app-meal",
  templateUrl: "./meal.component.html",
  styleUrls: ["./meal.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MealComponent implements OnInit {
  meal$: Observable<Meal>;
  subscription: Subscription;
  mealId: string;
  constructor(
    private mealSerice: MealsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    
  }

  ngOnInit(): void {
    this.subscription = this.mealSerice.meals$.subscribe();
    this.mealId = this.route.snapshot.params.id;
    this.meal$ = this.mealSerice.getMeal(this.mealId);
  }

  async Oncreate(event) {
    await this.mealSerice.addmeal(event);
    this.backToMeal();
  }

  backToMeal() {
    this.router.navigate(["../meals"]);
  }

  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }
}
