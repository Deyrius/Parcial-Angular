import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { LoginComponent } from './componentes/login/login.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';

const routes: Routes = [

  {
    path: 'login',
    component : LoginComponent
  },
  {
    path: 'navbar',
    component : NavbarComponent
  },
  {
    path: 'formulario',
    component: FormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
