import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public url = 'https://identitytoolkit.googleapis.com/v1/accounts';
  
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

    const authData = {

      ...user,
      returnSecureToken: true

    };

    // Mandamos el url y la informacion que queremos postear 
    return this.http.post(`${ this.url }:signInWithPassword?key=${ this.apiKey }`, authData);


  }

  // Usamos los tres puntos (...) porque declaramos la propiedad email y password, y los igualamos con las propiedades del mismo nombre que tiene el objeto user; decimos que el objeto authData tendra una propiedad llamada email que sera igual a la propiedad email del usuario, otra propiedad password que sera igual a la propiedad password del usuario y así sucesivamente 
  public newUser( user: UserModel ) {

    /*const authData = {

      email: user.email,
      password: user.password,
      returnSecureToken: true

    };*/

    
    const authData = {

      ...user,
      returnSecureToken: true

    };

    // Mandamos el url y la informacion que queremos postear 
    return this.http.post(`${ this.url }:signUp?key=${ this.apiKey }`, authData); 


  }

}
