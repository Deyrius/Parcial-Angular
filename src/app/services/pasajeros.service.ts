import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasajerosService {
  pasajeros: any = []
  pasajero: any = []
  pasajero2: any =[]
  pasajero3: any=[]

  constructor() { }

  getPrimerPasajero(id:number){
   this.pasajeros = Pasajeros.slice(0).find(Pasajero => Pasajero.pasajeroId == id )
   if(this.pasajeros.tipoPeriodo == 1){
     this.pasajero.push(this.pasajeros.limite)
     this.pasajero.push(this.pasajeros.definicionDiaria)
   }
   this.pasajeros = Pasajeros.slice(1).find(Pasajero => Pasajero.pasajeroId == id )
   if(this.pasajeros.tipoPeriodo == 2){
     this.pasajero.push(this.pasajeros.limite)
     this.pasajero.push(this.pasajeros.definicionSemanal)
   }
   this.pasajeros = Pasajeros.slice(2).find(Pasajero => Pasajero.pasajeroId == id )
   if(this.pasajeros.tipoPeriodo == 3){
     this.pasajero.push(this.pasajeros.limite)
     this.pasajero.push(this.pasajeros.definicionMensual)
   }
   return this.pasajero
  }
  getSegundoPasajero(id:number){
    this.pasajeros = Pasajeros.slice(3).find(Pasajero => Pasajero.pasajeroId == id )
    if(this.pasajeros.tipoPeriodo == 1){
      this.pasajero2.push(this.pasajeros.limite)
      this.pasajero2.push(this.pasajeros.definicionDiaria)
    }
    this.pasajeros = Pasajeros.slice(4).find(Pasajero => Pasajero.pasajeroId == id )
    if(this.pasajeros.tipoPeriodo == 2){
      this.pasajero2.push(this.pasajeros.limite)
      this.pasajero2.push(this.pasajeros.definicionSemanal)
    }
    this.pasajeros = Pasajeros.slice(5).find(Pasajero => Pasajero.pasajeroId == id )
    if(this.pasajeros.tipoPeriodo == 3){
      this.pasajero2.push(this.pasajeros.limite)
      this.pasajero2.push(this.pasajeros.definicionMensual)
    }
    return this.pasajero2
  }
  getTercerPasajero(id:number){
    this.pasajeros = Pasajeros.slice(6).find(Pasajero => Pasajero.pasajeroId == id )
    if(this.pasajeros.tipoPeriodo == 1){
      this.pasajero3.push(this.pasajeros.limite)
      this.pasajero3.push(this.pasajeros.definicionDiaria)
    }
    this.pasajeros = Pasajeros.slice(7).find(Pasajero => Pasajero.pasajeroId == id )
    if(this.pasajeros.tipoPeriodo == 2){
      this.pasajero3.push(this.pasajeros.limite)
      this.pasajero3.push(this.pasajeros.definicionSemanal)
    }
    this.pasajeros = Pasajeros.slice(8).find(Pasajero => Pasajero.pasajeroId == id )
    if(this.pasajeros.tipoPeriodo == 3){
      this.pasajero3.push(this.pasajeros.limite)
      this.pasajero3.push(this.pasajeros.definicionMensual)
    }
    return this.pasajero3
  }
  
 
}

const Pasajeros = [
      {
        "tipoPeriodo":1,
        "limite":40,
        "definicionDiaria":"08:00",
        "definicionSemanal":0,
        "definicionMensual":0,
        "pasajeroId":1,
      },
      {
        "tipoPeriodo":2,
        "limite":41,
        "definicionDiaria":0,
        "definicionSemanal":1,
        "definicionMensual":0,
        "pasajeroId":1,
      },
      {
        "tipoPeriodo":3,
        "limite":42,
        "definicionDiaria":0,
        "definicionSemanal":0,
        "definicionMensual":21,
        "pasajeroId":1,
      },
      {
        "tipoPeriodo":1,
        "limite":90,
        "definicionDiaria":"10:00",
        "definicionSemanal":0,
        "definicionMensual":0,
        "pasajeroId":2,
      },
      {
        "tipoPeriodo":2,
        "limite":91,
        "definicionDiaria":0,
        "definicionSemanal":7,
        "definicionMensual":0,
        "pasajeroId":2,
      },
      {
        "tipoPeriodo":3,
        "limite":92,
        "definicionDiaria":0,
        "definicionSemanal":0,
        "definicionMensual":4,
        "pasajeroId":2,
      },
      {
        "tipoPeriodo":1,
        "limite":150,
        "definicionDiaria":"23:00",
        "definicionSemanal":0,
        "definicionMensual":0,
        "pasajeroId":3,
      },
      {
        "tipoPeriodo":2,
        "limite":151,
        "definicionDiaria":0,
        "definicionSemanal":5,
        "definicionMensual":0,
        "pasajeroId":3,
      },
      {
        "tipoPeriodo":3,
        "limite":152,
        "definicionDiaria":0,
        "definicionMensual":30,
        "definicionSemanal":0,
        "pasajeroId":3,
      }
]


