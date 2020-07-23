import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: UserModel;

  constructor() { }

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


  }

}
