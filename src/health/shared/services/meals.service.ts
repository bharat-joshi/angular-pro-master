import { Injectable } from "@angular/core";
import { Store } from "store";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { AuthService, User } from "src/auth/shared/services/auth/auth.service";
import { Observable } from "rxjs";

export interface Meal{
  name:string,
  ingredients:string[],
  timesteam:number,
  $key:string,
  $exists:()=> boolean   
}

@Injectable()
export class MealsService {
//mTOPzLX89eNL863Kna2yeZ8iAlg2
 
  meals$: Observable<any[]> = this.db.list(`meals/mTOPzLX89eNL863Kna2yeZ8iAlg2`).valueChanges();
  
  constructor(
    private store: Store,
    private db: AngularFireDatabase,
    private authService: AuthService
  ) {
     this.meals$.subscribe((data)=>{
        if(data)
        {
          this.store.set('meals',data);
        }
     })
  }

  

  addmeal(meal:Meal)
  {
  return this.db.list(`meals/mTOPzLX89eNL863Kna2yeZ8iAlg2`).push(meal); 
  }
}
