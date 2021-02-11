import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { CrearComponent } from './crear/crear.component';
import { LeerComponent } from './leer/leer.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { BorrarComponent } from './borrar/borrar.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    CrearComponent,
    LeerComponent,
    ActualizarComponent,
    BorrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
