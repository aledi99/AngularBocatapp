import { Component, OnInit } from '@angular/core';
import { SignUpDto } from '../models/signup.dto';
import { AuthService } from '../services/auth.service';
import { EstablecimientoService } from '../services/establecimiento.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  user : SignUpDto;
 
  constructor(
    private servicio : AuthService,
    public colegioServicio: EstablecimientoService
  ) { 
    this.user = new SignUpDto('','','','');
  }

  ngOnInit() {
  }


  doSignUp(){
    this.servicio.signup(this.user).subscribe(x => {
      alert('email ' + x.username);
    });
  }

}
