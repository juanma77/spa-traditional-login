import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  
  public apiKey = 'AIzaSyDqUqI0PFVqDT_Y77KBLzAf_0l_vxBa5SM'; 


  // Crear nuevo usuario
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]


  // Login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]


  constructor( private http: HttpClient ) {



  }

  public logOut() {



  }


  public logIn( user: UserModel ) {



  }

  public newUser( user: UserModel ) {



  }

}
