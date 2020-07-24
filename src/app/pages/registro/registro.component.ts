import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public user: UserModel;

  public rememberUser: boolean = false; 

  constructor( private authService: AuthService, private router: Router ) { }

  ngOnInit() { 

    this.user = new UserModel(); 

    //this.user.email = 'juan@gmail.com'

  }

  public onSubmit( form: NgForm ) {

    if( form.invalid ) {

      return; 

    }

    Swal.fire({

      allowOutsideClick: false,
      text: 'Espere por favor...',

    });

    Swal.showLoading(); 


    console.log(' Form enviado ');
    console.log( this.user ); 
    console.log( form );

    this.authService.newUser( this.user ).subscribe( resp =>{

      console.log( resp ); 

      Swal.close();

      if( this.rememberUser ) {

        localStorage.setItem('email', this.user.email);

      }

      this.router.navigateByUrl('/home'); 

    },( err )=>{

      console.log( err.error.error.message );


      Swal.fire({

        icon: 'error',
        allowOutsideClick: false,
        title: 'Ha ocurrido un error',
        text: err.error.error.message
  
      });

    });
    
  }

}
