import { Injectable } from "@angular/core";
import { Store } from "store";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { AuthService, User } from "src/auth/shared/services/auth/auth.service";
import { Observable, observable, of } from "rxjs";
import { map, timestamp, filter, first, find, tap } from "rxjs/operators";

export interface Meal {
  name: string;
  ingredients: string[];
  timesteam: number;
  $key: string;
  $exists: () => boolean;
}

@Injectable()
export class MealsService {
  meal: Meal;
  //mTOPzLX89eNL863Kna2yeZ8iAlg2

  // meals$: Observable<any[]> = this.db.list(`meals/mTOPzLX89eNL863Kna2yeZ8iAlg2`).snapshotChanges().pipe(map((item : any)=>{
  //     item.map((a : any) =>{
  //       //  return( name : a.payload.val().name
  //       //   ingredients : a.payload.val().ingredients
  //       //   timesteam:1
  //       //   $key: a.payload.key
  //       //   $exists:false)
  //       if(a)
  //       {
  //        return meal : Meal={

  //        }
  //       }
  //     });
  // }));

  meals$: Observable<any[]> = this.getMeals();
  constructor(
    private store: Store,
    private db: AngularFireDatabase,
    private authService: AuthService
  ) {
    this.meals$.subscribe((data) => {
      if (data) {
        this.store.set("meals", data);
      }
    });
  }

  getMeals() {
    return this.db
      .list(`meals/mTOPzLX89eNL863Kna2yeZ8iAlg2`)
      .snapshotChanges()
      .pipe(
        map((item) => {
          return item.map((a: any) => {
            return (this.meal = {
              name: a.payload.val().name,
              ingredients: a.payload.val().ingredients,
              timesteam: 1,
              $key: a.payload.key,
              $exists: () => true,
            });
          });
        })
      );
  }

  addmeal(meal: Meal) {
    return this.db.list(`meals/mTOPzLX89eNL863Kna2yeZ8iAlg2`).push(meal);
  }

  removeMeal(key: string) {
    return this.db.list(`meals/mTOPzLX89eNL863Kna2yeZ8iAlg2`).remove(key);
  }
  getMeal(key: string) {
    if(!key)
    {
      return of(this.meal)
    }
  return this.store.select<Meal[]>("meals").pipe(filter((x)=>x != null),map(x=>x.find(x=>x.$key===key)));
  }
}
