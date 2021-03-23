import { ListarComponent } from './Cliente/listar/listar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarComponent } from './Cliente/criar/criar.component';
import { EditarComponent } from './Cliente/editar/editar.component';

const routes: Routes = [
  {path:'listar', component:ListarComponent},
  {path:'criar', component:CriarComponent},
  {path:'editar', component:EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
