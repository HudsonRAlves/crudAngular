import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Cliente/listar/listar.component';
import { CriarComponent } from './Cliente/criar/criar.component';
import { EditarComponent } from './Cliente/editar/editar.component';
import { FormsModule } from '@angular/forms';
import { ServicoService } from '../app/Servico/servico.service';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    CriarComponent,
    EditarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [ServicoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
