import { Component } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent {
  idiomasList:any;
  constructor(private datosPortfolio: ServicioService){}

  ngOnInit(): void {
   this.datosPortfolio.obtenerDatos().subscribe(data => {
    console.log(data);
    this.idiomasList= data.idiomas;
   });
  }
}
