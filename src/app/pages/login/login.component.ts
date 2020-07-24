import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: UserModel;

  public rememberUser: boolean = false; 

  constructor( private authService: AuthService, private router: Router ) { }

  ngOnInit() {

    this.user = new UserModel();

    if( localStorage.getItem('email') ) {

      this.user.email = localStorage.getItem('email');
      this.rememberUser = true; 

    }

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

    this.authService.logIn( this.user ).subscribe( resp =>{

      
      console.log( resp );
      Swal.close();


      if( this.rememberUser ) {

        localStorage.setItem('email', this.user.email);

      }

      this.router.navigateByUrl('/home');


    }, (err) => {

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
