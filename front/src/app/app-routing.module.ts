import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrarComponent} from './registrar/registrar.component'
import {ListarPacientesComponent} from './listar-pacientes/listar-pacientes.component'
import {GestionarPacientesComponent} from './gestionar-pacientes/gestionar-pacientes.component'

const routes: Routes = [
  {path:'registrar',component:RegistrarComponent},
  {path:'gestionarPacientes',component:GestionarPacientesComponent},
  {path:'listar',component:ListarPacientesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
