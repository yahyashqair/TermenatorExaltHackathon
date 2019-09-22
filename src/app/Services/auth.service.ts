import { Injectable } from  '@angular/core';
import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';
@Injectable({
    providedIn:  'root'
})
export  class  AuthService {
  user:  User;
  constructor(public  afAuth:  AngularFireAuth, public  router:  Router) { this.afAuth.authState.subscribe(user => {
    if (user) {
      console.log("done");
      this.user = user;
      localStorage.setItem('user', JSON.stringify(this.user.email));
      /*
      query donaters , email -- 
      */ 

     /*
      query hospital , email -- 
      */ 
     
      this.router.navigate['contactUs'];
      
    } else {
      localStorage.setItem('user', null);
    }
  });
}
async  login(email:  string, password:  string) {
  console.log("done");
  try {
      await  this.afAuth.auth.signInWithEmailAndPassword(email, password)
      this.router.navigate(['contactUs']);
  } catch (e) {
      alert("Error!"  +  e.message);
  }
  }
  async logout(){
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['admin/login']);
}
get isLoggedIn(): boolean {
  const  user  =  JSON.parse(localStorage.getItem('user'));
  return  user  !==  null;
}
}