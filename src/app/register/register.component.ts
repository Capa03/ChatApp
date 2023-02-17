import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(){}
  registerForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    confirmPassword : new FormControl()
  });

  onFormSubmit(): void{
    console.log('Username ' + this.registerForm.get('username')?.value);
    console.log('password ' + this.registerForm.get('password')?.value);
    console.log('confirmPassword ' + this.registerForm.get('confirmPassword')?.value);
  }
}
