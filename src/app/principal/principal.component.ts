import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  constructor(public servicio: ServicioService, public router: Router) { }

  ngOnInit(): void {
  }

  irACrear(){
    this.router.navigateByUrl('crear');
  }

  irALeer(){
    this.router.navigateByUrl('leer');
  }

  irAActualizar(){
    this.router.navigateByUrl('actualizar');
  }

}
