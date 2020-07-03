import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { AuthModule } from "src/auth/auth.module";
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// const firebaseConfig = {
//   apiKey: "AIzaSyDjQrbCKDBGkx09fwFMWJF5ARDuEoFJb2w",
//   authDomain: "fitness-app-b6f46.firebaseapp.com",
//   databaseURL: "https://fitness-app-b6f46.firebaseio.com",
//   projectId: "fitness-app-b6f46",
//   storageBucket: "fitness-app-b6f46.appspot.com",
//   messagingSenderId: "155262868651",
//   appId: "1:155262868651:web:5ec49711355665bf05abee"
// };
