import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { Store } from 'store';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';

//feauturemodule
import { AuthModule } from "src/auth/auth.module";
import { HealthModule } from 'src/health/health.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule,HealthModule],
  providers: [Store],
  bootstrap: [AppComponent],
})
export class AppModule {}
