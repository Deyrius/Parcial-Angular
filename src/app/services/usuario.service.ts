import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UsuarioService {
    userChange: Subject<User> = new Subject<User>();
    btnSelect: Subject<Menu> = new Subject<Menu>();
    btnMedios: Subject<Medios>= new Subject<Medios>();
    
    private user: User;
    private menu: Menu;
    private medios: Medios;
    
    constructor() {
        this.user = {
            mail: 'superadmin',
            pass: 'Azerty\\?\\.123',
            operador: 'Test',
            papel: 'Test',
            nombre: 'Test',
            apellido: 'Test',
            sesion: false,
        };
        this.menu = {
            formulario: false
        }
        this.medios = {
            medios: false
        }

        this.userChange.subscribe((usuario) => {
            this.user = usuario;
        });

        this.btnSelect.subscribe((menu) =>{
            this.menu = menu;
        })

        this.btnMedios.subscribe((medios)=>{
            this.medios = medios
        })

    }

    getUser(): User {
        return this.user;
    }

    setUser(user: User) {
        this.userChange.next(user);
    }

    getMenu():Menu{
        return this.menu;
    }

    setMenu(menu:Menu){
        this.btnSelect.next(menu);
    }

    getMedios(){
        return this.medios
    }

    setMedios(medios:Medios){
        this.btnMedios.next(medios);
    }

}

export interface User {
    mail: string;
    pass: string;
    sesion: boolean;
    apellido: string;
    nombre: string;
    papel: string;
    operador: string;
}

export interface Menu{
    formulario: boolean;
}
export interface Medios{
    medios: boolean;
}
