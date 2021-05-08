import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { UsuarioService, User } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  usuarioForm! : FormGroup
  usuario! : User
  aviso: any
  avisoError: any


 


  constructor(private usuarioService: UsuarioService) {
    this.inicializarValores()
    this.usuario = this.usuarioService.getUser()
    
    this.usuarioForm = new FormGroup({

      apellidoForm: new FormControl('',[Validators.required,Validators.pattern('([A-Za-z]{1,15})')],),
      nombreForm: new FormControl('',[Validators.required,Validators.pattern('([A-Za-z]{1,15})')],),
      mailForm: new FormControl('',[Validators.email,Validators.required]),
      operadorForm: new FormControl('',[Validators.required,Validators.pattern('([A-Za-z]{1,15})')],),
      papelForm: new FormControl('',[Validators.required,Validators.pattern('([A-Za-z]{1,15})')]),
      passForm: new FormControl('',[Validators.required,Validators.pattern('([A-Za-z0-9_]{1,15})')])


      
    })
    console.dir(this.usuario)

   }

  ngOnInit(): void {
  }

  btnCambios(){
    if(this.usuarioForm.valid){
      this.usuario.nombre = this.usuarioForm.controls['nombreForm'].value
      this.usuario.apellido = this.usuarioForm.controls['apellidoForm'].value
      this.usuario.mail = this.usuarioForm.controls['mailForm'].value
      this.usuario.operador = this.usuarioForm.controls['operadorForm'].value
      this.usuario.papel = this.usuarioForm.controls['papelForm'].value
      this.usuario.pass = this.usuarioForm.controls['passForm'].value
      
      console.dir(this.usuario)
      this.usuarioService.setUser(this.usuario)

      this.usuarioForm.reset()

      this.aviso = 'Se Guardaron los cambios correctamente.'
      this.avisoError = ""
      
    }else{
      this.avisoError = 'Revise que el correo este bien escrito y que el formulario este completo.'
      this.aviso = ""
    }
  }


  get controles() {
    return this.usuarioForm.controls;
  }

  inicializarValores(){
    this.usuario = this.usuarioService.getUser()
  
  } 


}
