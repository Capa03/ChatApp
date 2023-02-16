import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MainModule } from './main/main.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: "login", component:LoginComponent},
      {path: "", redirectTo: "login",pathMatch: "full"},
      {path: "**", redirectTo: "login",pathMatch: "full"},
    ]),
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
