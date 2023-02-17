import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MainModule } from './main/main.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: "login", component:LoginComponent},
      {path: "register", component:RegisterComponent},
      {path: "", redirectTo: "login",pathMatch: "full"},
      {path: "**", component:NotFoundPageComponent},

    ]),
    MainModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
