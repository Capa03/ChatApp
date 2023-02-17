import { LoginService } from './login.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from './User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private LoginService: LoginService, public router: Router){}
  filtredUser: User[] = [];
  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  onFormSubmit(): void{

    this.filtredUser = this.LoginService.getUser();
    for(let selected of this.filtredUser){
      if(selected.username == this.loginForm.get('username')?.value && selected.password == this.loginForm.get('password')?.value ){
        this.router.navigate(['/chat']);
        console.log("logged");

      }else{
        console.log("Failed");

      }


    }
    /*this.LoginService.getUser().subscribe({
      next: user =>{
        this.filtredUser = user;
        for(let selected of this.filtredUser){
          if(selected.username == this.loginForm.get('username')?.value && selected.password == this.loginForm.get('password')?.value ){
            console.log('Username' + this.loginForm.get('username')?.value);
            console.log(this.loginForm.get('password')?.value);
            console.log("logged");

          }
        }
      }
    });*/
  }
}
