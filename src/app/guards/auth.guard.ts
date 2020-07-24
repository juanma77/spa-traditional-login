import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})

// El CanActivate es la instruccion que se ejecuta cuando se navega a una ruta, y verifica si alguien puede acceder a esa ruta. En caso de que se pueda en "next" se especifica la ruta a la que se navegara 
export class AuthGuard implements CanActivate {

  constructor( private authService: AuthService, private router: Router ) {

  }

  canActivate(): boolean {
    
    console.log( 'Auth guard' );
    
    if( this.authService.isUserAuthenticated() ) {

      return true; 

    } else {

      this.router.navigateByUrl('/home');
      return false; 

    }


  }
  
}
