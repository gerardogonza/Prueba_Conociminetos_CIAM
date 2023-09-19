import { Component } from '@angular/core';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {

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
