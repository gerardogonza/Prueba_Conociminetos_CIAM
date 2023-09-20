import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
  constructor(private http: HttpClient) {}
  paciente: any = {
    "dpi": null,
    "nombres": "",
    "apellidos": "",
    "fecha_nacimiento": "",
    "direccion": "",
    "numero_telefono": "",
      "isActive": 1,
    "correo": "",
    "municipio": {
      "id": 1,
      "municipio": "Guatemala"
    },
    "genero": {
      "id": 1,
      "genero": "Masculino"
    },
    "tipoDocumento": {
      "id": 1,
      "tipo": "Licencia"
    },
    "tipopaciente": {
      "id": 1,
      "tipo_paciente": "VIP"
    }
  };

  submitForm() {
    // Aquí puedes acceder a los datos del paciente a través de this.paciente
    console.log("Datos del paciente:", this.paciente);
    const url = `http://localhost:8080/api/v1/users`;

    this.http.post(url, this.paciente)
      .subscribe(response => {
        console.log('Paciente actualizado:', response);
        // Realiza acciones adicionales si es necesario
      }, error => {
        console.error('Error al actualizar paciente:', error);
        // Maneja el error según tus necesidades
      });

    // Lógica para gestionar pacientes
    // Por ejemplo, puedes enviar los datos a un servicio o realizar otras acciones.
  }
}
