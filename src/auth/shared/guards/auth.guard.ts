import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { AuthService } from "../services/auth/auth.service";
import { map } from 'rxjs/operators';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | import("@angular/router").UrlTree
    | import("rxjs").Observable<boolean | import("@angular/router").UrlTree>
    | Promise<boolean | import("@angular/router").UrlTree> {
    return this.authService.authState.pipe(
      map((user) => {
        if (!user) {
          this.router.navigate(["auth/login"]);
        }
        return !!user;
      })
    );
  }

  // canActivate(){
  //     return this.authService.authState.pipe(map((user)=>{
  //         if(!user)
  //         {
  //             this.router.navigate(['auth/login'])
  //         }
  //         return !!user
  //     }))
  // }
}
