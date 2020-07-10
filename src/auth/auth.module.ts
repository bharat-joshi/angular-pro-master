import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

//third party module
import { AngularFireModule, FirebaseAppConfig } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
// import { AngularFireDatabase } from "@angular/fire/database";
import { SharedModule } from './shared/shared.module';

//shared module

export const firebaseConfig :FirebaseAppConfig = {
  apiKey: "AIzaSyDjQrbCKDBGkx09fwFMWJF5ARDuEoFJb2w",
  authDomain: "fitness-app-b6f46.firebaseapp.com",
  databaseURL: "https://fitness-app-b6f46.firebaseio.com",
  projectId: "fitness-app-b6f46",
  storageBucket: "fitness-app-b6f46.appspot.com",
  messagingSenderId: "155262868651",
  appId: "1:155262868651:web:5ec49711355665bf05abee"
};


export const routes: Routes = [
  {
    path: "auth",
    children: [
      { path: "", pathMatch: "full", redirectTo: "login" },
      {
        path: "login",
        loadChildren: () =>
          import("./login/login.module").then((m) => m.LoginModule),
      },
      {
        path: "register",
        loadChildren: () =>
          import("./Register/register.module").then((m) => m.RegisterModule),
      },
    ],
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), AngularFireModule.initializeApp(firebaseConfig) ,AngularFireAuthModule,SharedModule.forRoot()],
})
export class AuthModule {}
