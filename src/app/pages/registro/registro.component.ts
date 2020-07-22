import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public user: UserModel;

  constructor() { }

  ngOnInit() { 

    this.user = new UserModel(); 

    this.user.email = 'juan@gmail.com'

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
