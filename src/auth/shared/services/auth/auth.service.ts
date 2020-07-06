import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Store } from "store";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";



export interface User {
  email: string;
  uid: string;
  authenticated: boolean;
}

@Injectable()
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private store: Store) {}

  auth$ = this.afAuth.authState.pipe(tap((next) => {
    if (!next) {
      this.store.set("user", null);
      return;
    }
    const user: User = {
      email: next.email,
      uid: next.uid,
      authenticated: true,
    };
    this.store.set("user", user);
  }));


  createUser(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  loginUser(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  logoutUser()
  {
    return this.afAuth.signOut();
  }
}
