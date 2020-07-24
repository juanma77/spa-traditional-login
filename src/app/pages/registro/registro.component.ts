import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public user: UserModel;

  constructor( private authService: AuthService ) { }

  ngOnInit() { 

    this.user = new UserModel(); 

    //this.user.email = 'juan@gmail.com'

  }

  public onSubmit( form: NgForm ) {

    if( form.invalid ) {

      return; 

    }


    console.log(' Form enviado ');
    console.log( this.user ); 
    console.log( form );

    this.authService.newUser( this.user ).subscribe( resp =>{

      console.log( resp ); 

    },( err )=>{

      console.log( err.error.error.message );


    });
    
  }

}
