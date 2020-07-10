import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

//third-party
import {AngularFireDatabaseModule} from '@angular/fire/database'
import { RouterModule } from '@angular/router';
import { MealsService } from './services/meals.service';
import { ScheduleService } from './services/schedule.service';
import { WorkoutsService } from './services/workouts.service';
import { ListItemComponent } from './component/list-item/list-item.component';

@NgModule({
  declarations: [ListItemComponent],
  imports: [
    CommonModule,
    AngularFireDatabaseModule,
    RouterModule
  ],
  exports:[ListItemComponent]
})
export class SharedModule { 
  static forRoot():ModuleWithProviders{
    return{
      ngModule:SharedModule,
      providers:[
       MealsService,
       ScheduleService,
       WorkoutsService
      ]
    }
  }
}
