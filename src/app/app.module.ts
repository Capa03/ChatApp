import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MainModule } from './main/main.module';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot([
            { path: "login", component: LoginComponent },
            { path: "", redirectTo: "login", pathMatch: "full" },
            { path: "**", redirectTo: "login", pathMatch: "full" },
        ]),
        HttpClientModule,
        MainModule,
    ]
})
export class AppModule { }
