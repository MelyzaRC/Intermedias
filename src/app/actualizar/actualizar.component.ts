import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../servicio.service';


@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.scss']
})
export class ActualizarComponent implements OnInit {


  public EMAIL: any;
  public PASSWORD: any;
  public NOMBRE: any;

  constructor(public servicio: ServicioService, public router: Router) { }

  ngOnInit(): void {
  }

  public irPrincipal(){
    this.router.navigateByUrl('/');
  }
}
