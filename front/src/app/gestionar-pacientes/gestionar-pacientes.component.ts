import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gestionar-pacientes',
  templateUrl: './gestionar-pacientes.component.html',
  styleUrls: ['./gestionar-pacientes.component.css']
})
export class GestionarPacientesComponent {
  constructor(private router: Router) {}
  pacientes: any[] = [
    {
      dpi: 334234324334,
      nombres: 'Gerardo',
      apellidos: 'prueba',
      id_tipo_dpi: 1,
      fecha_nacimiento: '2022-01-10',
      id_genero: 1,
      direccion: 'direccion',
      id_municipio: 1,
      numero_telefono: 223,
      correo: 'correo@mail.com',
      id_tipo_paciente: 1
    },
  ];

  //editar paciente 
  editarPaciente(paciente: any) {
    console.log("Editar paciente:", paciente);
    this.router.navigate([`/editar/${paciente.dpi}`]);
  }

  //eliminar paciente
  eliminarPaciente(paciente: any) {
    console.log("Eliminar paciente:", paciente);
  }
}
