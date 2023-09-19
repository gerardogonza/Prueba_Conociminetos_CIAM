import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pacientes',
  templateUrl: './listar-pacientes.component.html',
  styleUrls: ['./listar-pacientes.component.css']
})
export class ListarPacientesComponent {
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
}
