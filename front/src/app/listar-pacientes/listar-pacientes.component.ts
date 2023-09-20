import { Component,OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listar-pacientes',
  templateUrl: './listar-pacientes.component.html',
  styleUrls: ['./listar-pacientes.component.css']
})
export class ListarPacientesComponent  {
  constructor(private http: HttpClient) { }
  pacientes: any[] = [];

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8080/api/v1/users')
      .subscribe(data => {
        this.pacientes = data;
      });
  }

}
