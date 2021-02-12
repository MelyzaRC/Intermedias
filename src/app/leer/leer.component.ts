import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-leer',
  templateUrl: './leer.component.html',
  styleUrls: ['./leer.component.scss']
})
export class LeerComponent implements OnInit {

  constructor(public servicio: ServicioService, public router: Router) { }

  ngOnInit(): void {
    console.log(this.servicio.vector);
  }

  public irPrincipal(){
    this.router.navigateByUrl('principal');
  }

  public resultado : Array<object> = [];
  public borrar(correo: any){
    this.servicio.vector.forEach(elemento => {
      if(elemento[1] != correo){
        this.resultado.push(elemento);
      }
    });
    this.servicio.vector = this.resultado;
    this.resultado = [];
  }

}
