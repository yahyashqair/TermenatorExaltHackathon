import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../../Services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public  authService:  AuthService) { }

  ngOnInit() {
  }

  login(email: string, password:string){
    console.log(email, password);
    this.authService.login(email,password);

  }

}
