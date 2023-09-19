import { Component } from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
  paciente: any = {
    dpi: null,
    nombres: '',
    apellidos: '',
    fecha_nacimiento: null,
    direccion: '',
    numero_telefono: null,
    correo: '',
    tipo_documento:'',
    municipio:'',
    genero:'',
    tipo_paciente:'',
  };

  submitForm() {
    // Aquí puedes acceder a los datos del paciente a través de this.paciente
    console.log("Datos del paciente:", this.paciente);

    // Lógica para gestionar pacientes
    // Por ejemplo, puedes enviar los datos a un servicio o realizar otras acciones.
  }
}
