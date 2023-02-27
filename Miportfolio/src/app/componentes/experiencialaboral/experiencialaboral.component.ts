import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-experiencialaboral',
  templateUrl: './experiencialaboral.component.html',
  styleUrls: ['./experiencialaboral.component.css']
})
export class ExperiencialaboralComponent {
  experienciaList:any;
  constructor(private datosPortfolio: ServicioService){}

  ngOnInit(): void {
   this.datosPortfolio.obtenerDatos().subscribe(data => {
    console.log(data);
    this.experienciaList= data.experiencia;
   });
 
}
}
