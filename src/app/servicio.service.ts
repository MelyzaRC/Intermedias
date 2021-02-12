import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  /*---ALMACENAMIENTO DE USUARIOS---*/
  public vector : Array<object> = [];
  public usuario1 = [
    'Melyza Rodriguez',
    'ejemplo1@ejemplo.com',
    '123'
  ]

  public usuario2 = [
    'Juan Perez',
    'ejemplo2@ejemplo.com',
    '123'
  ]

  public usuario3 = [
    'Jose Lopez',
    'ejemplo3@ejemplo.com',
    '123'
  ]

  public usuario4 = [
    'Ana Gomez',
    'ejemplo4@ejemplo.com',
    '123'
  ]

  public usuario5 = [
    'Carlos Perez',
    'ejemplo5@ejemplo.com',
    '123'
  ]

  


  constructor(private http: HttpClient) {
    this.vector.push(this.usuario1);
    this.vector.push(this.usuario2);
    this.vector.push(this.usuario3);
    this.vector.push(this.usuario4);
    this.vector.push(this.usuario5);
   }

  
}
