import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../servicio.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {


  public EMAIL: any;
  public PASSWORD: any;
  public NOMBRE: any;


  constructor(public servicio: ServicioService, public router: Router) { }

  ngOnInit(): void {
  }

  public irPrincipal(){
    this.router.navigateByUrl('/');
  }

  public nuevo: any;
  public crearUsuario(){
    this.nuevo = [this.NOMBRE, this.EMAIL, this.PASSWORD];
    this.servicio.vector.push(this.nuevo);
    this.nuevo = null;
    this.router.navigateByUrl('principal');
  }

}
