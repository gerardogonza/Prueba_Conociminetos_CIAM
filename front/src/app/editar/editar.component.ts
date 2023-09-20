import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  constructor(private http: HttpClient,private route: ActivatedRoute) { }
 
  paciente: any = {};
  //obtener el id del paciente por medio de la url

  municipios: any[] = [
    {
      id: 1,
      municipio: 'Guatemala'
    },
    {
      id: 2,
      municipio: 'Mixco'
    },
    {
      id: 3,
      municipio: 'Villa Nueva'
    }
  ];



  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
     const  pacienteId = params.get('id');
      console.log('ID del paciente:', pacienteId);
      // Aquí puedes realizar acciones con el ID del paciente
      this.http.get<any[]>(`http://localhost:8080/api/v1/users/${pacienteId}`)
        .subscribe(data => {
          this.paciente = data;
        });
    });
  }
  submitForm() {
    // Aquí puedes acceder a los datos del paciente a través de this.paciente
    console.log("Datos del paciente:", this.paciente);

    // Lógica para gestionar pacientes
    // Por ejemplo, puedes enviar los datos a un servicio o realizar otras acciones.
     //hacemos el put para actualizar el paciente
     const url = `http://localhost:8080/api/v1/users/${this.paciente.dpi}`;

     this.http.put(url, this.paciente)
       .subscribe(response => {
         console.log('Paciente actualizado:', response);
         // Realiza acciones adicionales si es necesario
       }, error => {
         console.error('Error al actualizar paciente:', error);
         // Maneja el error según tus necesidades
       });
  }


}
