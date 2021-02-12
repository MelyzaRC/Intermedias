import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../servicio.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.scss']
})
export class ActualizarComponent implements OnInit {


  public EMAIL: any;
  public PASSWORD: any;
  public NOMBRE: any;

  constructor(public servicio: ServicioService, public router: Router, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.EMAIL = this.rutaActiva.snapshot.params.correo;
    if(this.EMAIL != null){
      this.servicio.vector.forEach(elemento => {
        if(elemento[1] == this.EMAIL){
          this.NOMBRE = elemento[0];
          this.PASSWORD = elemento[2];
        }
      });
    }
  }

  public irPrincipal(){
    this.router.navigateByUrl('leer');
  }


  public actualizar(){
    this.servicio.vector.forEach(elemento => {
      if(elemento[1] == this.EMAIL){
        elemento[0] = this.NOMBRE ;
        elemento[2] = this.PASSWORD ;
      }
    });
    this.router.navigateByUrl('leer');
  }
}
