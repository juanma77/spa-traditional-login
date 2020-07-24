import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: UserModel;

  constructor( private authService: AuthService ) { }

  ngOnInit() {

    this.user = new UserModel();

  }

  public onSubmit( form: NgForm ) {

    if( form.invalid ) {

      return; 

    }

    console.log(' Form enviado ');
    console.log( this.user );
    console.log( form ); 

    this.authService.logIn( this.user ).subscribe( resp =>{

      
      console.log( resp );


    }, (err) => {

      console.log( err.error.error.message );

    });


  }

}
