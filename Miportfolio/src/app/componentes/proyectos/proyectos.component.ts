import { Component } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  proyectosList:any;
  constructor(private datosPortfolio: ServicioService){}

  ngOnInit(): void {
   this.datosPortfolio.obtenerDatos().subscribe(data => {
    console.log(data);
    this.proyectosList= data.proyectos;
   });
 
}
}
