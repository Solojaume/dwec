import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyectoPruevaAMierda';
  nombre = 'Rodriguez Pablo';
  edad = 40;
  sueldos = [1700, 1600, 1900];
  contador = 1;

  incrementar() {
    this.contador++;
  };

  decrementar() {
    this.contador--;
  };
  nombre='';
  apellido='';
}
