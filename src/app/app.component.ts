import { Component, OnInit } from '@angular/core';
import { Medios, Menu, User, UsuarioService } from './services/usuario.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'Parcial';

    validUser!: User;
    validMenu!: Menu;
    validMedio!: Medios;

    constructor(private usuarioService: UsuarioService) {
        usuarioService.userChange.subscribe((value) => {
            this.validUser = value;
        });
        usuarioService.btnSelect.subscribe((value) =>{
            this.validMenu = value;
        })
        usuarioService.btnMedios.subscribe((value) => {
            this.validMedio = value;
        })

        
        
    }
}
