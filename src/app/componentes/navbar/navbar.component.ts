import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService, User, Menu, Medios } from 'src/app/services/usuario.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
    usuario!: User;
    menu!:Menu;
    medios!:Medios;



    constructor(private usuarioService: UsuarioService) {
        this.usuario = usuarioService.getUser()
        this.medios = usuarioService.getMedios()
        this.menu = usuarioService.getMenu()

    }


    ngOnInit(): void {}

    btnFormulario(){
        this.menu.formulario = true;
        this.medios.medios = false;
        this.usuarioService.setMenu(this.menu);
        this.usuarioService.setMedios(this.medios)
        console.dir(this.menu)
    
    }

    btnsCerrar(){
        this.usuario.sesion= false
        this.menu.formulario = false;
        this.medios.medios = false;
        this.usuarioService.setUser(this.usuario)
        this.usuarioService.setMenu(this.menu)
        this.usuarioService.setMedios(this.medios)
        
    }
    btnMedios(){
        this.medios.medios = true
        this.menu.formulario = false;
        this.usuarioService.setMedios(this.medios)
        this.usuarioService.setMenu(this.menu)
    }
}
