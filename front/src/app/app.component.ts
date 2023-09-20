import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';
  constructor(private router: Router) {}

  registrarPaciente() {
    // redireccionar a /registrar
    this.router.navigate(['/registrar']);
  }

  gestionarPacientes() {
    // Lógica para gestionar pacientes
    this.router.navigate(['/gestionarPacientes']);
  }

  verPacientesPotenciales() {
    // Lógica para ver pacientes potenciales
    this.router.navigate(['/listar']);
  }

}
