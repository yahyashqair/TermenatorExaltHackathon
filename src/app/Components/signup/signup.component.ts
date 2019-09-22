import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../../Services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(public  authService:  AuthService) { }

  ngOnInit() {
  }
  sign(name:string,birthday:string,gender:string,phone:string,email:string, password:string){
this.authService.signUp(name,birthday,gender,phone,email,password);
  }
}
