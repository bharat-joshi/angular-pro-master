import { Component } from "@angular/core";
import { Store } from "store";
import { AuthService, User } from "src/auth/shared/services/auth/auth.service";
import { Observable, Subscription } from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "angular-pro-app";

  user$: Observable<User>;
  subscription: Subscription;
  constructor(private store: Store, private authservice: AuthService,private router:Router) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.subscription = this.authservice.auth$.subscribe()
    this.user$ = this.store.select<User>('user');
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe(); 
  }

  Onlogout()
  {
    this.authservice.logoutUser();
    try {
      this.router.navigate(['/auth/login'])
    } catch (error) {
       console.log(error.message)
    }
  }
}
