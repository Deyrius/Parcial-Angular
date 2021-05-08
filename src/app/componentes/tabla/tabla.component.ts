import { Component, OnInit } from '@angular/core';
import { PasajerosService } from 'src/app/services/pasajeros.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  models : any 
  pasajero1!: string[]
  pasajero2!: string[]
  pasajero3!: string[]
  list : string[] = []

  constructor(private pasajerosService : PasajerosService) {

    this.pasajero1 = pasajerosService.getPrimerPasajero(1);
    console.dir(this.pasajero1)
    this.pasajero2 = pasajerosService.getSegundoPasajero(2);
    console.dir(this.pasajero2)
    this.pasajero3 = pasajerosService.getTercerPasajero(3);
    console.dir(this.pasajero3)
    
    
   
    
 

   }

  ngOnInit(): void {
  }

}
