import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrarComponent } from './registrar/registrar.component';
import { GestionarPacientesComponent } from './gestionar-pacientes/gestionar-pacientes.component';
import { ListarPacientesComponent } from './listar-pacientes/listar-pacientes.component';
import { EditarComponent } from './editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarComponent,
    GestionarPacientesComponent,
    ListarPacientesComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
