import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { BorrarComponent } from './borrar/borrar.component';
import { LeerComponent } from './leer/leer.component';
import { CrearComponent } from './crear/crear.component';

const routes: Routes = [
  {path:'principal', component: PrincipalComponent},
  {path:'actualizar', component: ActualizarComponent},
  {path:'borrar', component: BorrarComponent},
  {path:'leer', component: LeerComponent},
  {path:'crear', component: CrearComponent},
  {path: '**', component: PrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
