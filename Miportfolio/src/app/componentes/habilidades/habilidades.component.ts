import { Component } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent {
  habilidadesList:any;
  constructor(private datosPortfolio: ServicioService){}

  ngOnInit(): void {
   this.datosPortfolio.obtenerDatos().subscribe(data => {
    console.log(data);
    this.habilidadesList= data.habilidades;
   });
  }

}
