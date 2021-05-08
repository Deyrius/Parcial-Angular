import { Component, OnInit } from '@angular/core';
import {
    AbstractControl,
    FormControl,
    FormGroup,
    ValidatorFn,
    Validators,
} from '@angular/forms';
import { UsuarioService, User } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent {
    usuario!: User;

    loginform!: FormGroup;

    constructor(private usuarioService: UsuarioService) {
        this.inicializarValores(this.usuarioService.getUser());

        this.usuarioService.userChange.subscribe((usuario) => {
            this.inicializarValores(usuario);
        });
    }

    inicializarValores(usuario: User) {
        this.usuario = usuario;
        this.loginform = new FormGroup({
            usuario: new FormControl('', [
                Validators.required,
                Validators.minLength(4),
                Validators.pattern(this.usuario.mail),
            ]),
            pass: new FormControl('', [
                Validators.required,
                Validators.minLength(4),
                Validators.pattern(this.usuario.pass),
            ]),
        });
    }

    get controles() {
        return this.loginform.controls;
    }

    btnSesion() {
        this.usuario.sesion = true;
        this.usuarioService.setUser(this.usuario);
    }
}
