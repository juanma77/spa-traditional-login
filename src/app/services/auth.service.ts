import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public url = 'https://identitytoolkit.googleapis.com/v1/accounts';
  
  public apiKey = 'AIzaSyDqUqI0PFVqDT_Y77KBLzAf_0l_vxBa5SM'; 

  public userToken: string; 


  // Crear nuevo usuario
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]


  // Login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]


  constructor( private http: HttpClient ) {

    this.readUserToken(); 

  }

  public logOut() {



  }


  public logIn( user: UserModel ) {

    const authData = {

      ...user,
      returnSecureToken: true

    };

    // Mandamos el url y la informacion que queremos postear 
    return this.http.post(`${ this.url }:signInWithPassword?key=${ this.apiKey }`, authData).pipe(

      map( (resp) =>{

        console.log('Entramos al map de rxjs');
        this.saveUserToken( resp['idToken'] );
        return resp;

      })

    ); 


  


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

    // Mandamos el url y la informacion que queremos postear; el pipe es para agregar mas operadores luego de él mismo, mientras que el map es para que a cada elemento de la respuesta en este caso, se le agregue un filtro que solo obtenga el "idToken"
    return this.http.post(`${ this.url }:signUp?key=${ this.apiKey }`, authData).pipe(

      map( (resp) =>{

        console.log('Entramos al map de rxjs');
        this.saveUserToken( resp['idToken'] );
        return resp;

      })

    ); 


  }

  private saveUserToken( idToken: string ) {


    this.userToken = idToken;
    localStorage.setItem('Token', idToken);


  }

  public readUserToken(  ) {

    if( localStorage.getItem('Token') ) {

      this.userToken = localStorage.getItem('Token');

    } else {

      this.userToken= '';

    }

    return this.userToken; 

  }

}
