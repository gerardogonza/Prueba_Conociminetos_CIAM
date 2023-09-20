import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-gestionar-pacientes',
  templateUrl: './gestionar-pacientes.component.html',
  styleUrls: ['./gestionar-pacientes.component.css']
})
export class GestionarPacientesComponent {
  constructor(private router: Router,private http: HttpClient) {}

  pacientes: any[] = [];

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8080/api/v1/users')
      .subscribe(data => {
        this.pacientes = data;
      });
  }


  //editar paciente 
  editarPaciente(paciente: any) {
    this.router.navigate([`/editar/${paciente.dpi}`]);    
  }

  //eliminar paciente
  eliminarPaciente(paciente: any) {
    console.log("Eliminar paciente:", paciente);
    //cambiamos el isActive del paciente a eliminado
  
    const temp = paciente;
    temp.isActive = 0;
    
    //hacemos el put para actualizar el paciente
    const url = `http://localhost:8080/api/v1/users/${paciente.dpi}`;

    this.http.put(url, temp)
      .subscribe(response => {
        console.log('Paciente actualizado:', response);
        // Realiza acciones adicionales si es necesario
      }, error => {
        console.error('Error al actualizar paciente:', error);
        // Maneja el error según tus necesidades
      });
  }
 
}
