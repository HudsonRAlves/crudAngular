import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-angular-app';

  constructor(private router:Router){
  }


  Listar(){
    this.router.navigate(["listar"]);
  }

  Criar(){
    this.router.navigate(["criar"]);
  }

  Editar(){
    this.router.navigate(["editar"]);
  }

}
